module.exports = (name, nameUppercase, base = '@tenjojeremy/web-toolkit/', path) => {
  let importString = `import ${nameUppercase} from '${base}${path}/styles/1'`

  return importString
}
