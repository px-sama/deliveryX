import CreateSchema from '@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

// import blockContent from '/blockContent'

import category from './category'
import restaurant from './restaurant'
// import author from './author'

export default CreateSchema({
    name: 'default',

    types: schemaTypes.concat([
        restaurant,
        // author,
        // category,
        // blockContent,
    ])
})