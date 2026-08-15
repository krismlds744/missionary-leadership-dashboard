create table if not exists public.convert_progress (
  id text primary key,
  progress jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.convert_progress enable row level security;

create policy "Authenticated users can read shared convert progress"
on public.convert_progress for select to authenticated using (true);

create policy "Authenticated users can update shared convert progress"
on public.convert_progress for insert to authenticated with check (true);

create policy "Authenticated users can modify shared convert progress"
on public.convert_progress for update to authenticated using (true) with check (true);

alter publication supabase_realtime add table public.convert_progress;