import Gallery from '@browniebroke/gatsby-image-gallery';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect } from 'react';
import ImageWrapper from './ImageWrapper';

const CustomGallery = () => {
  useEffect(() => {
    const galleryRow = document.querySelector(`#portfolio > .container > div`);
    galleryRow.classList.add(`justify-content-center`);
  }, []);

  const data = useStaticQuery(graphql`
    query ImagesForGallery {
      allFile(filter: { sourceInstanceName: { eq: "portfolio" } }) {
        edges {
          node {
            childImageSharp {
              thumb: gatsbyImageData(
                width: 270
                height: 270
                placeholder: BLURRED
              )
              full: gatsbyImageData(layout: FULL_WIDTH)
            }
            title: name
          }
        }
      }
    }
  `);
  const images = data.allFile.edges.map(({ node }) => ({
    ...node.childImageSharp,
    title: node.title,
  }));
  return (
    <Gallery
      images={images}
      gutter="0px"
      rowMargin={0}
      customWrapper={ImageWrapper}
    />
  );
};

export default CustomGallery;
