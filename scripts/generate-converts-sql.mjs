import { readFile, writeFile } from 'node:fs/promises'

const source = await readFile(new URL('../src/data/convertRetention.ts', import.meta.url), 'utf8')
const wardRowsSource = source.match(/const wardRows:[\s\S]*?= (\[[\s\S]*?\n\])/)

if (!wardRowsSource) throw new Error('Could not read the local convert roster.')

const wardRows = Function(`return ${wardRowsSource[1]}`)()
const escapeSql = (value) => String(value).replaceAll("'", "''")
const converts = wardRows.flatMap(([ward, rows]) => rows.map((row, index) => {
  const [name, gender, age] = row.split('|')
  const id = `${ward.toLowerCase().replaceAll(' ', '-')}-${index + 1}`
  return `('${escapeSql(id)}', '${escapeSql(name)}', '${escapeSql(gender)}', ${Number(age)}, '${escapeSql(ward)}', 'Not reported', null)`
}))

const sql = `insert into public.converts (id, name, gender, age, ward, confirmation_date, months_membership) values\n${converts.join(',\n')}\non conflict (id) do nothing;\n`
const output = new URL('../supabase/seed_converts.sql', import.meta.url)

await writeFile(output, sql, 'utf8')
console.log(`Generated ${converts.length} preserved convert records in ${output.pathname}.`)