# av-component-product-cart

Este es un paquete de pruebas de despliegue

### Nini

## Ejemplo

```
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons
} from 'av-component-product-cart'

```
## Asi se ve el componente
el product luce asi:

```
const product = {
    id:'123',
    title:'Coffe-1',
}

```

```
<ProductCard
    product={product}
    initialValue={{
        count:0,
        // maxCount:10
    }}
>

    {
        ( { reset, increaseBy,isMaxReached } ) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
                               
            </>
        )
    }

                    

</ ProductCard >
```