---
to: features/<%= Name %>.readme.md
---
<%_ compLocation = name.split('/') _%>
<%_ compLocation.splice(-1, 1) _%>
<%_ compLocation = compLocation.join('/') _%>
<%_ compLocation = 'features/' + compLocation _%>
<%_ compName = name.split('/') _%>
<%_ compName = compName[compName.length - 1] _%>
<%_ compNameLower = compName.charAt(0).toLowerCase() + compName.slice(1); _%>
<%_ compNameUpper = compName.charAt(0).toUpperCase() + compName.slice(1); _%>
### Usage
```js
import Button from 'components/button';
```
### Properties
|**propName**|**propType**|**defaultValue**|**isRequired**|   
|---|---|---|---|
|   |   |   |   |   
|   |   |   |   |  
|   |   |   |   |   

```
Requirements: 
    *
```
### Information
* Url: https://www.npmjs.com/package/<%= compNameUpper %>
* Install: `yarn add `

#### Update

- Export

  - `yarn update --minor`
  - or
  - `yarn update --mayor`

#### Remove

* `npm unpublish @tenjo/<%= compNameUpper %> --force`


