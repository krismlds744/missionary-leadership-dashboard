-- Run this once in the Supabase SQL Editor after ward_access.sql.
-- Only stake presidency may delete converts; ward accounts cannot delete any convert.
create policy "Only stake presidency can delete converts" on public.converts for delete to authenticated
  using (public.current_role() = 'stake_presidency');
