import { AddIcon, RemoveIcon } from "@/assets/Icons";
const QuantitySelector = ({ quantity, setQuantity }) => {
  return (
    <div>
      <div className="quantity">
        <RemoveIcon
          className="quantity-btn"
          onClick={() => {
            quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1);
          }}
        />
        <input
          type="number"
          className="quantity-input"
          // defaultValue={quantity}
          onChange={(e) => {
            //no se permite poner 0 a la izquierda
            e.target.value = e.target.value.replace(/^0+/, Number(1));
            e.target.value < 1
              ? setQuantity(1)
              : setQuantity(Number(e.target.value));
          }}
          value={quantity}
        />
        <AddIcon
          className="quantity-btn"
          onClick={() => setQuantity(quantity + 1)}
        />
      </div>
    </div>
  );
};

export default QuantitySelector;
