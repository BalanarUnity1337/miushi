import $ from 'jquery';

export default (function() {
  const $products = $('.product');

  $products.each(function() {
    // Main
    const $product = $(this);
    const $productControls = $product.find('.product__controls');
    const $productControlsSub = $productControls.children(
      '.product__controls-sub'
    );
    const $productControlsCount = $productControls.children(
      '.product__controls-count'
    );
    const $productControlsAdd = $productControls.children(
      '.product__controls-add'
    );
    const $productPrice = $product.find('.product__price-value');
    const data = $product.data('price');
    const origPrice = Number(data.price);

    // Additives
    const $productAdditivesControls = $product.find(
      '.product__additives-controls'
    );
    const $productAdditivesCount = $productAdditivesControls.find(
      '.product__additives-count-value'
    );
    const $productAdditivesRemove = $productAdditivesControls.find(
      '.product__additives-remove'
    );
    const $productAdditivesCost = $productAdditivesControls.find(
      '.product__additives-cost-value'
    );
    const $productAdditivesAdd = $productAdditivesControls.children(
      '.product__additives-add'
    );
    const $selectAdditives = $product.find('[name="additives"]');
    const additivesPrices = data.additives;

    // Main
    $productControlsAdd.click(function() {
      const count = Number($productControlsCount.val());
      const price = Number($productPrice.text().replace(/\u00a0/g, ''));

      $productControlsCount.val(count + 1);
      $productPrice.text((price + origPrice).toLocaleString('ru'));
    });

    $productControlsSub.click(function() {
      const count = Number($productControlsCount.val());
      const price = Number($productPrice.text().replace(/\u00a0/g, ''));

      if (count > 1) {
        $productControlsCount.val(count - 1);
        $productPrice.text((price - origPrice).toLocaleString('ru'));
      }
    });

    // Additives
    $productAdditivesAdd.click(function() {
      const selectedAdditive = $selectAdditives.val();
      const count = Number($productAdditivesCount.text());
      const additivePrice = Number(
        $productAdditivesCost.text().replace(/\u00a0/g, '')
      );
      const origAdditivePrice = Number(additivesPrices[selectedAdditive]);
      const productPrice = Number($productPrice.text().replace(/\u00a0/g, ''));

      $productAdditivesCount.text(count + 1);
      $productAdditivesCost.text(additivePrice + origAdditivePrice);
      $productPrice.text(productPrice + origAdditivePrice);
    });

    $productAdditivesRemove.click(function() {
      const selectedAdditive = $selectAdditives.val();
      const count = Number($productAdditivesCount.text());
      const origAdditivePrice = Number(additivesPrices[selectedAdditive]);
      const productPrice = Number($productPrice.text().replace(/\u00a0/g, ''));

      $productAdditivesCount.text(0);
      $productAdditivesCost.text(0);
      $productPrice.text(productPrice - count * origAdditivePrice);
    });

    // Change additive
    $selectAdditives.change(function() {
      const selectedAdditive = $selectAdditives.val();
      const count = Number($productAdditivesCount.text());
      const additivePrice = Number(
        $productAdditivesCost.text().replace(/\u00a0/g, '')
      );
      const origAdditivePrice = Number(additivesPrices[selectedAdditive]);
      const productPrice = Number($productPrice.text().replace(/\u00a0/g, ''));
      const newValue = count * origAdditivePrice;
      const difference = newValue - additivePrice;

      $productAdditivesCost.text(newValue);
      $productPrice.text(productPrice + difference);
    });
  });
})();
