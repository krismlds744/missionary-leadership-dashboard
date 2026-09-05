-- Run this once in the Supabase SQL Editor after ward_access.sql.
-- Ward users may insert only into their assigned ward; stake presidency may insert into any ward.
create policy "Authorized users can add converts" on public.converts for insert to authenticated
  with check (public.current_role() = 'stake_presidency' or ward = public.current_ward());