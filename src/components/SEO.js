import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({description, keywords, title, image, url, author}) => {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription = description || data.site.siteMetadata.description
                const metaKeywords = keywords || ["project", "images", "marketing", "Discretuum project"]
                const metaTitle = title || data.site.siteMetadata.title
                const metaUrl = url || data.site.siteMetadata.url
                const metaImage = image || data.site.siteMetadata.image
                const metaAuthor = author || data.site.siteMetadata.author
                return (
                    <Helmet
                        title={title}
                        meta={[
                            {
                                name: 'description',
                                content: metaDescription
                            },
                            {
                                property: 'og:title',
                                content: metaTitle
                            },
                            {
                                property: 'og:description',
                                content: metaDescription
                            },
                            {
                                property: 'og:type',
                                content: 'website'
                            },
                            {
                                property: 'og:url',
                                content: metaUrl
                            },
                            {
                                property: 'og:image',
                                content: metaImage
                            },
                            {
                                property: 'og:author',
                                content: metaAuthor
                            },
                        ].concat(
                            metaKeywords && metaKeywords.length > 0 ? {
                                name: 'keywords',
                                content: metaKeywords.join(', ')
                            } : []
                        )
                        }
                    />
                )
            }}
        />
    )
}

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
                url
                image
            }
        }
    }
`

export default SEO