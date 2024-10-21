import { View, Text, FlatList, StyleSheet } from 'react-native'

import { PRODUCTS } from '../../../assets/products'
import {ProductListItem} from '../../components/product-list-item'
import { ListHeader } from '../../components/list-header'

const index = () => {
  return (
    <View>
      <FlatList
      data={PRODUCTS}
      renderItem={({ item }) => (
        <ProductListItem product={item} />
      )} 
      numColumns={2}
      ListHeaderComponent={<ListHeader />}
      contentContainerStyle={style.flatListContent}
      columnWrapperStyle={style.flatListColumn}
      style={{paddingHorizontal: 10, paddingVertical: 5}}
      keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default index

const style = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: 'space-between',
  }
})