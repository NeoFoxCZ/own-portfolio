
const fetch = require(`node-fetch`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')
const axios = require('axios')


exports.onCreateNode = ({ node, getNode }) => {
  console.log(`Node created of type "${node.internal.type}"`)
}

const getRepositoryData = async () => {
  return axios.get(`http://neofox.cz:90/wp-json/wp/v2/posts`);
}

const getSubcategoriesData = async () => {
  return axios.get(`http://192.168.99.99/universal_parts_api/`)
}

const getSubcategoriesDataDetail = async (name) => {
  return axios.get(`http://192.168.99.99/universal_parts_api/${name}`)
}

const getUsedProductDetialData = async (name) => {
  return axios.get(`http://192.168.99.99/zbozi_api/${name}`)
}

const getArticles = async () => {
  return axios.get(`https://api.mulu.cz/api/articles/search-front/0/1/12/`);
}

exports.createPages = async ({
                               actions: {
                                 createPage
                               }
                             }) => {

  let repositories = await getArticles();
  repositories = repositories.data;
  if (repositories != null) {
    repositories.forEach(repository => {
      createPage({
        path: `/blog/${repository.url}`,
        component: require.resolve('./src/templates/article-detail.tsx'),
        context: {
          type: "article-detail",
          repository,
        }
      });
    });
  }

};


