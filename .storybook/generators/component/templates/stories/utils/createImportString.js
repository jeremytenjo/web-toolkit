module.exports = (name, nameUppercase, base = '@tenjojeremy/web-toolkit/') => {
  console.log(__dirname)
  let importString = `import ${nameUppercase} from '${base}input/${nameUppercase}/styles/1'`

  return importString
}
