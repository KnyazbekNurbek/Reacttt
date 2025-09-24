import "./Product.css";

export default function Product({ title, price, inStock, description, rating, tags }) {
  const safeRating = Math.min(5, Math.max(1, Number(rating) || 1));

  const hasDiscount = Array.isArray(tags) && tags.includes("Скидка");
  const finalPrice = hasDiscount ? Math.round(price * 0.9) : price;

  const formatPrice = (v) => `${v}₸`;

  return (
    <article className="product-card">
      <h2 className="product-title">{title}</h2>
      <p className="product-desc">{description}</p>

      <p className="product-price">
        {inStock ? (
          hasDiscount ? (
            <>
              <span className="old">{formatPrice(price)}</span>{" "}
              <span className="new">{formatPrice(finalPrice)}</span>
            </>
          ) : (
            <span>{formatPrice(price)}</span>
          )
        ) : (
          <span className="no-stock">Нет в наличии</span>
        )}
      </p>

      <p className="product-rating">
        {"⭐".repeat(safeRating)}
      </p>

      {Array.isArray(tags) && tags.length > 0 && (
        <div className="product-tags">
          {tags.map((t, i) => (
            <span key={i} className="tag">{t}</span>
          ))}
        </div>
      )}
    </article>
  );
}
