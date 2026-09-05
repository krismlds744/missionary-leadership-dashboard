-- Run this migration in the Supabase SQL Editor before deploying the application.
-- It replaces the insecure shared convert-progress document with ward-scoped rows.

drop table if exists public.convert_progress cascade;

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null,
  email text not null unique,
  role text not null check (role in ('stake_presidency', 'ward')),
  ward text,
  constraint ward_users_require_a_ward check ((role = 'stake_presidency' and ward is null) or (role = 'ward' and ward is not null))
);

create or replace function public.assign_authorized_profile()
returns trigger
language plpgsql
security definer set search_path = public
as $$
declare
  assigned_role text;
  assigned_ward text;
begin
  select role, ward into assigned_role, assigned_ward
  from (values
    ('presidency@stake.org', 'Stake Presidency', 'stake_presidency', null),
    ('kalayaan@stake.org', 'Kalayaan Ward', 'ward', 'Kalayaan'),
    ('bs@stake.org', 'Bagong Silangan Ward', 'ward', 'Bagong Silangan'),
    ('b2@stake.org', 'Batasan Hills 2nd Ward', 'ward', 'Batasan Hills 2nd'),
    ('b1@stake.org', 'Batasan Hills 1st Ward', 'ward', 'Batasan Hills 1st'),
    ('fairview@stake.org', 'Fairview Ward', 'ward', 'Fairview'),
    ('da@stake.org', 'Don Antonio Ward', 'ward', 'Don Antonio'),
    ('mapayapa@stake.org', 'Mapayapa Ward', 'ward', 'Mapayapa')
  ) as accounts(email, name, role, ward)
  where accounts.email = lower(new.email);

  if assigned_role is null then
    raise exception 'This account is not authorized for Mission Insights';
  end if;

  insert into public.profiles (id, name, email, role, ward)
  select new.id, accounts.name, accounts.email, accounts.role, accounts.ward
  from (values
    ('presidency@stake.org', 'Stake Presidency', 'stake_presidency', null),
    ('kalayaan@stake.org', 'Kalayaan Ward', 'ward', 'Kalayaan'),
    ('bs@stake.org', 'Bagong Silangan Ward', 'ward', 'Bagong Silangan'),
    ('b2@stake.org', 'Batasan Hills 2nd Ward', 'ward', 'Batasan Hills 2nd'),
    ('b1@stake.org', 'Batasan Hills 1st Ward', 'ward', 'Batasan Hills 1st'),
    ('fairview@stake.org', 'Fairview Ward', 'ward', 'Fairview'),
    ('da@stake.org', 'Don Antonio Ward', 'ward', 'Don Antonio'),
    ('mapayapa@stake.org', 'Mapayapa Ward', 'ward', 'Mapayapa')
  ) as accounts(email, name, role, ward)
  where accounts.email = lower(new.email);
  return new;
end;
$$;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.assign_authorized_profile();

insert into public.profiles (id, name, email, role, ward)
select users.id, accounts.name, accounts.email, accounts.role, accounts.ward
from auth.users as users
join (values
  ('presidency@stake.org', 'Stake Presidency', 'stake_presidency', null),
  ('kalayaan@stake.org', 'Kalayaan Ward', 'ward', 'Kalayaan'),
  ('bs@stake.org', 'Bagong Silangan Ward', 'ward', 'Bagong Silangan'),
  ('b2@stake.org', 'Batasan Hills 2nd Ward', 'ward', 'Batasan Hills 2nd'),
  ('b1@stake.org', 'Batasan Hills 1st Ward', 'ward', 'Batasan Hills 1st'),
  ('fairview@stake.org', 'Fairview Ward', 'ward', 'Fairview'),
  ('da@stake.org', 'Don Antonio Ward', 'ward', 'Don Antonio'),
  ('mapayapa@stake.org', 'Mapayapa Ward', 'ward', 'Mapayapa')
) as accounts(email, name, role, ward) on accounts.email = lower(users.email)
on conflict (id) do update set name = excluded.name, email = excluded.email, role = excluded.role, ward = excluded.ward;

create or replace function public.current_role()
returns text language sql stable security definer set search_path = public
as $$ select role from public.profiles where id = auth.uid() $$;

create or replace function public.current_ward()
returns text language sql stable security definer set search_path = public
as $$ select ward from public.profiles where id = auth.uid() $$;

alter table public.profiles enable row level security;
create policy "Users can read their own profile" on public.profiles for select to authenticated using (id = auth.uid());

create table public.converts (
  id text primary key,
  name text not null,
  gender text not null check (gender in ('M', 'F')),
  age integer not null,
  ward text not null,
  confirmation_date text not null default 'Not reported',
  months_membership integer
);

create table public.convert_progress (
  convert_id text primary key references public.converts(id) on delete cascade,
  progress jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.converts enable row level security;
alter table public.convert_progress enable row level security;

create policy "Authorized users can read converts" on public.converts for select to authenticated
  using (public.current_role() = 'stake_presidency' or ward = public.current_ward());

create policy "Authorized users can read convert progress" on public.convert_progress for select to authenticated
  using (public.current_role() = 'stake_presidency' or exists (select 1 from public.converts where converts.id = convert_id and converts.ward = public.current_ward()));

create policy "Authorized users can add convert progress" on public.convert_progress for insert to authenticated
  with check (public.current_role() = 'stake_presidency' or exists (select 1 from public.converts where converts.id = convert_id and converts.ward = public.current_ward()));

create policy "Authorized users can update convert progress" on public.convert_progress for update to authenticated
  using (public.current_role() = 'stake_presidency' or exists (select 1 from public.converts where converts.id = convert_id and converts.ward = public.current_ward()))
  with check (public.current_role() = 'stake_presidency' or exists (select 1 from public.converts where converts.id = convert_id and converts.ward = public.current_ward()));

alter publication supabase_realtime add table public.convert_progress;