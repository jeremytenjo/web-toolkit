module.exports = (name, nameUppercase, base = '@tenjojeremy/web-toolkit/', path) => {
  console.log(__dirname)
  let importString = `import ${nameUppercase} from '${base}${path}/styles/1'`

  return importString
}
