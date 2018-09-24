export default {
  site: {
    title: 'React Universal Blog'
  },
  bucket: {
    slug: process.env.COSMIC_BUCKET || '9d6b5dd0-bfe7-11e8-9939-05b55120fcc3',
    media_url: 'https://cosmicjs.com/uploads',
    read_key: process.env.COSMIC_READ_KEY || '',
    write_key: process.env.COSMIC_WRITE_KEY || ''
  },
}