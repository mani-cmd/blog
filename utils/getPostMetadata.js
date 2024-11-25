import fs from 'fs'
import matter from 'gray-matter'

export default function getPostMetadata(basePath) {
    const folder = basePath + '/'
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith('.md'))

    // get the file data
    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
        const matterResult = matter(fileContents)
        const title = matterResult.data.title
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            // cook_time: matterResult.data.cook_time,
            // bio: matterResult.data.description,
            slug: filename.replace('.md', '') 
            // slug: (title).toLowercase().replace(" ", "-")
        }
    })
    return posts
}
