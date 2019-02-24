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
### Bit Information
* Url: https://bitsrc.io/bit/movie-app/components/hero-button
* Install: `yarn add @bit/bit.movie-app.components.hero-button`

#### Export

* Add: `bit add <%= compLocation %>/ --main <%= compNameLower %>.index.js`
* Tag (Version):
    * `bit tag --minor <%= compNameLower %>`
    * or
    * `bit tag --mayor <%= compNameLower %>`
* Export `bit export tenjojeremy.web-features <%= compNameLower %>`

#### Update

* Tag (Version):
    * `bit tag --minor <%= compNameLower %>`
    * or
    * `bit tag --mayor <%= compNameLower %>`
* Export `bit export tenjojeremy.web-features <%= compNameLower %>`

#### Remove

* Remove Locally: `bit remove tenjojeremy.web-features/<%= compNameUpper %>`
* Remove Remote: `bit remove tenjojeremy.web-features/<%= compNameUpper %> --remote`


