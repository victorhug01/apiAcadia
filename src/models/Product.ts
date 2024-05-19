type Product = {
    title: string,
    price: number
};

const data: Product[] = [
  { title: "Produto x", price: 10 },
  { title: "Produto y", price: 15 },
  { title: "Produto w", price: 20 },
  { title: "Produto G", price: 5 }
];

export const Product = {
    getAll: (): Product[] => {
        return data
    },
    getFromPriceAfter: (price: number): Product[] => {
        return data.filter(item => {
            if(item.price >= price){
                return true
            }else{
                return false;
            }
        })
    }
}