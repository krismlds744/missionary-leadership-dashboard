import { readFile } from 'node:fs/promises'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error('Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY before running this command.')
}

const source = await readFile(new URL('../src/data/convertRetention.ts', import.meta.url), 'utf8')
const wardRowsSource = source.match(/const wardRows:[\s\S]*?= (\[[\s\S]*?\n\])/)
if (!wardRowsSource) throw new Error('Could not read the local convert roster.')

const wardRows = Function(`return ${wardRowsSource[1]}`)()
const converts = wardRows.flatMap(([ward, rows]) => rows.map((row, index) => {
  const [name, gender, age] = row.split('|')
  return {
    id: `${ward.toLowerCase().replaceAll(' ', '-')}-${index + 1}`,
    name,
    gender,
    age: Number(age),
    ward,
    confirmation_date: 'Not reported',
    months_membership: null,
  }
}))

const supabase = createClient(supabaseUrl, serviceRoleKey)
const { error } = await supabase.from('converts').upsert(converts, { onConflict: 'id' })
if (error) throw error

console.log(`Seeded ${converts.length} converts.`)