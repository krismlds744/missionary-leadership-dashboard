-- Run once in the Supabase SQL Editor after ward_access.sql and seed_converts.sql.
-- Existing records are preserved; only the supplied attendance status is recorded.
alter table public.converts add column if not exists attended_sacrament_last_month boolean not null default true;

update public.converts
set attended_sacrament_last_month = false
where (ward, name) in (
  ('Batasan Hills 1st', 'Cereño Lapido, Jai Lei'), ('Batasan Hills 1st', 'Laurel, Rizalina Niagas'), ('Batasan Hills 1st', 'Tagalog Jr., Francisco Sorita'), ('Batasan Hills 1st', 'Tagalog, Francel Nacionales'), ('Batasan Hills 1st', 'Tagalog, Franchesca Marie Nacionales'), ('Batasan Hills 1st', 'Tagalog, Franck Nacionales'), ('Batasan Hills 1st', 'Tagalog, Franky Marie Nacionales'), ('Batasan Hills 1st', 'Yamson, Rhian Jane'), ('Batasan Hills 1st', 'Yanila, Jay-ar Relis'),
  ('Batasan Hills 2nd', 'Basada, Conner Cañete'), ('Batasan Hills 2nd', 'Dela Cruz, John Philip Motita'), ('Batasan Hills 2nd', 'Sunajo, Joey Pineda'),
  ('Bagong Silangan', 'Cabador, Franzhys Justo'), ('Bagong Silangan', 'Inoncillo, Terenel'), ('Bagong Silangan', 'Quares, Rodesh'), ('Bagong Silangan', 'Sarahan, Erwin'),
  ('Fairview', 'Agaid, Rosalinda Gapol'), ('Fairview', 'Hermoso, Angel Mae Calledo'), ('Fairview', 'Maglente, Angela Modar'), ('Fairview', 'Racan, Jefferson Saturñino'), ('Fairview', 'Taconing, Melka'), ('Fairview', 'Tapia, Jeric Amodia'),
  ('Kalayaan', 'Baro, Lhyra Cerbito'), ('Kalayaan', 'Revilla, Dinah Rose Quinikito'),
  ('Mapayapa', 'Altiche, Reinna Medina'), ('Mapayapa', 'Cruzata, DJ Arci'), ('Mapayapa', 'Morales, Jhenalyn Mhae'), ('Mapayapa', 'Navarro, Fairy Jane Cuartela'), ('Mapayapa', 'Nerbato, Prince RJ'), ('Mapayapa', 'Ruelo, Callie Brielle Wenceslao'), ('Mapayapa', 'Ruelo, Keith Gabrielle Wenceslao')
);