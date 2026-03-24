import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const assetsDir = path.resolve(process.cwd(), 'src', 'assets')
const images = [
  'hero-cleaning.jpg',
  'sofa-cleaning.jpg',
  'carpet-cleaning.jpg',
  'mattress-cleaning.jpg',
  'chairs-cleaning.jpg',
  'tapestry-cleaning.jpg',
  'sanitization.jpg',
  'before-after.jpg',
  'professional-equipment.jpg',
]

async function processImage(file) {
  const input = path.join(assetsDir, file)
  if (!fs.existsSync(input)) {
    console.warn('No existe:', input)
    return
  }

  const name = path.parse(file).name

  const variants = [
    { suffix: '-800', width: 800, quality: 80 },
    { suffix: '-1600', width: 1600, quality: 80 },
  ]

  for (const v of variants) {
    const outJpg = path.join(assetsDir, `${name}${v.suffix}.jpg`)
    const outWebp = path.join(assetsDir, `${name}${v.suffix}.webp`)
    try {
      await sharp(input)
        .resize({ width: v.width })
        .jpeg({ quality: v.quality })
        .toFile(outJpg)

      await sharp(input)
        .resize({ width: v.width })
        .webp({ quality: Math.min(80, v.quality) })
        .toFile(outWebp)

      console.log('Generado:', path.basename(outJpg), path.basename(outWebp))
    } catch (err) {
      console.error('Error procesando', file, err)
    }
  }
}

async function main() {
  for (const img of images) {
    await processImage(img)
  }
  console.log('Optimización completada.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
