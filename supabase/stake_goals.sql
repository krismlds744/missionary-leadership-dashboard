create table if not exists public.stake_goals (
  id text primary key,
  records jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.stake_goals enable row level security;

create policy "Authenticated users can read shared stake goals"
on public.stake_goals for select to authenticated using (true);

create policy "Authenticated users can insert shared stake goals"
on public.stake_goals for insert to authenticated with check (true);

create policy "Authenticated users can update shared stake goals"
on public.stake_goals for update to authenticated using (true) with check (true);

alter publication supabase_realtime add table public.stake_goals;
