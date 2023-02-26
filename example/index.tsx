import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons  } from '../.';

const product = {
    id:'123',
    title:'Coffe-1',
    // img:'./coffee-mug.png'
};

const App = () => {
  return (
    <>
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
