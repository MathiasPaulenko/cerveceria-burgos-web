import { readFileSync, writeFileSync } from 'fs';

function i(id, n, d, p, extra = {}) {
  return { id, nombre: n, descripcion: d, precio: p, tipo: 'comida', alergenos: [], disponible: true, destacado: false, ...extra };
}

const racionesItems = [
  i('ensalada_mixta', 'Ensalada Mixta', '', 8.50, { precio_media: 5.50 }),
  i('ensalada_cesar', 'Ensalada Cesar', '', 10.00, { precio_media: 6.50 }),
  i('ensalada_burrata', 'Ensalada de Burrata', '', 12.00, { alergenos: ['lactosa'] }),
  i('croquetas_jamon', 'Croquetas de Jamon', '8 uds.', 8.00, { precio_media: 5.00, alergenos: ['gluten','huevo','lactosa'] }),
  i('croquetas_rabo', 'Croquetas de Rabo de Vacuno', '8 uds.', 9.00, { precio_media: 6.50, alergenos: ['gluten','huevo','lactosa'] }),
  i('croquetas_espinaca', 'Croquetas de Espinaca y Queso de Cabra', '8 uds.', 8.00, { precio_media: 5.00, alergenos: ['gluten','huevo','lactosa'] }),
  i('croquetas_boletus', 'Croquetas de Boletus', '8 uds.', 9.00, { precio_media: 6.50, alergenos: ['gluten','huevo','lactosa'] }),
  i('croquetas_chorizo', 'Croquetas de Chorizo y Huevo', '8 uds.', 8.00, { precio_media: 5.00, alergenos: ['gluten','huevo','lactosa'] }),
  i('croquetas_gambas', 'Croquetas de Gambas al Ajillo', '8 uds.', 9.50, { precio_media: 6.50, alergenos: ['gluten','huevo','lactosa','crustaceos'] }),
  i('croquetas_cochinillo', 'Croquetas de Cochinillo', '8 uds.', 9.50, { precio_media: 6.50, alergenos: ['gluten','huevo','lactosa'] }),
  i('surtido_croquetas', 'Surtido de Croquetas', '2 de jamon, 2 chorizo y huevo, 2 de boletus, 2 de rabo de vacuno y 2 de gambas al ajillo', 10.00, { alergenos: ['gluten','huevo','lactosa','crustaceos'] }),
  i('patatas_bravas', 'Patatas Bravas', '', 8.00, { precio_media: 5.50 }),
  i('patatas_alioli', 'Patatas Alioli', '', 8.00, { precio_media: 5.50 }),
  i('patatas_burgos', 'Patatas Burgos', 'Patatas con salsa del chef', 8.00, { precio_media: 5.50 }),
  i('patatas_mixtas', 'Patatas Mixtas', 'Salsa brava y burgos', 8.00, { precio_media: 5.50 }),
  i('revuelto_gambas', 'Revuelto de Gambas', '', 10.00),
  i('revuelto_morcilla', 'Revuelto de Morcilla', '', 9.00),
  i('morcilla_pimientos', 'Morcilla de Burgos con Pimientos de Padron', '', 8.00),
  i('oreja_plancha', 'Oreja a la Plancha', '', 9.50),
  i('alitas_fritas', 'Alitas Fritas', '', 9.50, { precio_media: 6.50 }),
  i('alitas_bbq', 'Alitas con Salsa Barbacoa', '', 9.50, { precio_media: 6.50 }),
  i('fingers_pollo', 'Fingers de Pollo', 'Con salsa barbacoa', 9.00),
  i('tiras_pollo_cajun', 'Tiras de Pollo Cajun', 'Pollo marinado con rebozado cajun acompanado de salsa mostaza y miel', 9.00),
  i('crocanti_gouda', 'Crocanti de Queso Gouda', '100% queso gouda con empanado de cereales acompanado de mermelada de arandanos', 8.50),
  i('cheddar_bites', 'Cheddar Bites con Jalapenos', 'Bolitas de queso cheddar con jalapenos acompanado de salsa barbacoa', 8.50),
  i('bienmesabe', 'Bienmesabe', 'Cazon adobado', 11.00, { precio_media: 7.00 }),
  i('calamares_romana', 'Calamares a la Romana', '', 11.00, { precio_media: 7.00 }),
  i('chopitos', 'Chopitos', '', 11.00),
  i('sepia_plancha', 'Sepia a la Plancha', '', 16.00),
  i('bacalao_rebozado', 'Bacalao Rebozado', '', 16.00),
  i('huevos_chistorra', 'Huevos Rotos con Chistorra', '', 11.00, { precio_media: 8.00 }),
  i('huevos_morcilla', 'Huevos Rotos con Morcilla', '', 11.00, { precio_media: 8.00 }),
  i('huevos_jamon', 'Huevos Rotos con Jamon', '', 12.00, { precio_media: 9.00 }),
  i('huevos_chistorra_cabra', 'Huevos Rotos con Chistorra y Rulo de Queso de Cabra', '', 13.00, { precio_media: 9.50 }),
  i('huevos_morcilla_cabra', 'Huevos Rotos con Morcilla y Rulo de Queso de Cabra', '', 13.00, { precio_media: 9.50 }),
  i('huevos_jamon_cabra', 'Huevos Rotos con Jamon y Rulo de Queso de Cabra', '', 14.00, { precio_media: 10.50 }),
  i('patatas_rancheras', 'Patatas Rancheras', 'Patatas fritas con nuestra salsa ranchera a base de yogurt y cilantro, beicon crujiente, queso fundido y cebolla crispi', 12.00),
  i('patatas_pulled_pork', 'Patatas Pulled Pork Cheese', 'Patatas fritas con salsa ranchera, carne de cerdo deshilachada con salsa BBQ, queso gratinado y jalapenos', 14.00),
  i('salchipapas', 'Salchipapas', 'Con salsa ketchup y mayonesa', 9.00),
  i('provoleta_beicon', 'Provoleta con Beicon y Jalapenos', 'Queso provolone al horno con tomate natural, beicon a la plancha y jalapenos', 10.50),
  i('provolone_horno', 'Provolone al Horno', 'Queso provolone al horno con tomate natural', 9.00),
  i('gambon_plancha', 'Gambon a la Plancha', '', 14.00),
  i('tequenos', 'Tequenos de Queso', '', 9.00),
  i('rulo_cabra', 'Rulo de Cabra Rebozado', '', 9.00),
  i('gyozas', 'Gyozas de Pollo y Verduras', '', 7.50),
];

const carnesItems = [
  i('costillar_bbq', 'Costillar de Cerdo en Salsa Barbacoa', 'Con patatas', 19.00),
  i('carrillada', 'Carrillada en su Jugo', 'Con patatas', 13.00),
  i('chuleton', 'Chuleton', '900 gr', 33.00),
  i('picanha', 'Picanha', '500 gr', 26.00, { destacado: true }),
  i('entrana', 'Entrana', '600 gr', 26.00),
  i('entrecot', 'Entrecot', '', 16.00),
  i('tira_asado', 'Tira de Asado', '', 18.00),
  i('chuleta_vaca', 'Chuleta de Vaca', '', 19.00),
  i('cachopo', 'Cachopo Asturiano Tradicional', '', 28.00),
  i('chivito', 'Chivito Uruguayo', 'Plato de ternera con lechuga, tomate, cebolla, jamon cocido, beicon, queso, pimiento verde frito y huevo frito acompanado de patatas fritas y salsa chimichurri casera', 18.00),
  i('milanesa', 'Milanesa Napolitana', 'Escalope de ternera con salsa napolitana casera con lechuga, tomate, cebolla, jamon cocido, queso y huevo frito acompanado de patatas fritas', 18.00),
];

const hamburguesasItems = [
  i('hamburguesa_normal', 'Hamburguesa Normal', 'Rucula, tomate, cebolla y carne 200 gr con patatas fritas', 9.00),
  i('hamburguesa_completa', 'Hamburguesa Completa', 'Rucula, tomate, cebolla, carne 200 gr, queso y beicon con patatas fritas', 10.50),
  i('hamburguesa_burgos', 'Hamburguesa Burgos', 'Rucula, tomate, cebolla, carne 200 gr, queso, jamon york, beicon y huevo con patatas fritas', 12.50),
  i('hamburguesa_pollo', 'Hamburguesa de Escalope de Pollo', 'Rucula, tomate, cebolla, escalope de pollo, queso y beicon con patatas fritas', 10.50),
  i('hamburguesa_pollo_burgos', 'Hamburguesa de Escalope de Pollo Burgos', 'Rucula, tomate, cebolla, escalope de pollo, queso, jamon york, beicon, huevo y patatas fritas', 12.50),
  i('hamburguesa_cabrita', 'Hamburguesa La Cabrita', 'Rucula, tomate, carne 200 gr, beicon, rulo de queso de cabra, cebolla caramelizada y patatas fritas', 12.50),
  i('hamburguesa_pastrami', 'Pastrami Burguer', 'Salsa ranchera, tomate, carne 200gr 100% vacuno, queso cheddar, pastrami, rucula y salsa sriracha', 15.00),
  i('hamburguesa_pulled_pork', 'Pulled Pork Purger', 'Salsa ranchera, tomate, carne 200gr 100% vacuno, queso cheddar, pepinillos, pulled pork', 15.00),
  i('hamburguesa_burrata', 'Burrata Burguer', 'Mayonesa de albahaca, tomate, carne 200gr 100% vacuno, bacon, rucula, burrata fresca', 15.00),
  i('extra_carne', 'Extra de Carne', '', 3.00),
];

const platosCombinadosItems = [
  i('combo_lomo_patatas', 'Lomo a la Plancha con Patatas y Huevo', '', 10.00),
  i('combo_filete_ternera_patatas', 'Filete de Ternera con Patatas y Huevo', '', 11.00),
  i('combo_pollo_patatas', 'Filete de Pollo a la Plancha con Patatas y Huevo', '', 10.00),
  i('combo_escalope_pollo_patatas', 'Escalope de Pollo con Patatas y Huevo', '', 10.00),
  i('combo_panceta_patatas', 'Panceta con Patatas y Huevo', '', 10.00),
  i('combo_chorizo_patatas', 'Chorizo Frito con Patatas y Huevo', '', 10.00),
  i('combo_calamares_patatas', 'Calamares con Patatas y Huevo', '', 10.50),
  i('combo_escalope_ternera_patatas', 'Escalope de Ternera con Patatas y Huevo', '', 11.00),
  i('combo_lomo_ensalada', 'Lomo a la Plancha con Ensalada', '', 10.00),
  i('combo_filete_ternera_ensalada', 'Filete de Ternera con Ensalada', '', 11.00),
  i('combo_pollo_ensalada', 'Filete de Pollo a la Plancha con Ensalada', '', 10.00),
  i('combo_escalope_pollo_ensalada', 'Escalope de Pollo con Ensalada', '', 10.00),
  i('combo_escalope_ternera_ensalada', 'Escalope de Ternera con Ensalada', '', 11.00),
  i('combo_calamares_ensalada', 'Calamares con Ensalada', '', 10.50),
];

const sandwichItems = [
  i('sandwich_mixto', 'Sandwich Mixto', 'Jamon york y queso', 2.90),
  i('sandwich_mixto_patatas', 'Sandwich Mixto con Patatas Fritas', '', 4.20),
  i('sandwich_mixto_huevo', 'Sandwich Mixto con Huevo Frito', '', 3.50),
  i('sandwich_mixto_huevo_patatas', 'Sandwich Mixto con Huevo y Patatas Fritas', '', 4.80),
  i('sandwich_burgos', 'Sandwich Burgos', 'Lechuga, tomate, jamon york, queso, beicon y huevo frito con patatas fritas', 7.00),
  i('sandwich_pollo', 'Sandwich de Pollo', 'Lechuga, tomate, filete de pollo a la plancha, jamon york, queso, beicon y huevo frito con patatas fritas', 9.00),
  i('sandwich_vegetal', 'Sandwich Vegetal', 'Lechuga, tomate, cebolla, atun, pimiento piquillo y huevo frito', 7.00),
];

const bocadillosItems = [
  i('boc_chistorra', 'Bocadillo de Chistorra', '', 5.00, { precio_media: 3.00 }),
  i('boc_lomo', 'Bocadillo de Lomo', '', 5.00, { precio_media: 3.00 }),
  i('boc_beicon', 'Bocadillo de Beicon', '', 5.00, { precio_media: 3.00 }),
  i('boc_panceta', 'Bocadillo de Panceta', '', 5.00, { precio_media: 3.00 }),
  i('boc_ternera', 'Bocadillo de Ternera', '', 7.00),
  i('boc_morcilla', 'Bocadillo de Morcilla de Burgos', '', 5.00, { precio_media: 3.00 }),
  i('boc_escalope_pollo', 'Bocadillo de Escalope de Pollo', '', 6.00),
  i('boc_pollo_plancha', 'Bocadillo de Pollo a la Plancha', '', 6.00),
  i('boc_tortilla_francesa', 'Bocadillo de Tortilla Francesa', '', 5.00, { precio_media: 3.00 }),
  i('boc_tortilla_patatas', 'Bocadillo de Tortilla de Patatas', '', 5.00, { precio_media: 3.00 }),
  i('boc_oreja', 'Bocadillo de Oreja', '', 6.50),
  i('boc_jamon_curado', 'Bocadillo de Jamon Curado', '', 5.00, { precio_media: 3.00 }),
  i('boc_calamares', 'Bocadillo de Calamares', '', 6.00, { precio_media: 3.20 }),
  i('boc_chorizo', 'Bocadillo de Chorizo Frito', '', 5.00, { precio_media: 3.00 }),
  i('boc_choripan', 'Choripan', 'Bocadillo de chorizo criollo con chimichurri casero, mayonesa, lechuga y tomate', 8.50),
  i('boc_tamarito', 'Tamarito', 'Bocadillo de escalope de pollo con lechuga, tomate y mayonesa', 7.00),
  i('boc_solomillo', 'Solomillo con Queso Brie', '', 8.50),
  i('extra_ingredientes', 'Ingredientes Extra', '', 0.50),
  i('extra_patatas', 'Patatas Fritas Extra', '', 1.50),
  i('suplemento_terraza', 'Suplemento en Terraza', '', 0.20),
];

const nuevasEs = [
  { id: 'raciones', nombre: 'Raciones', icono: 'ChefHat', descripcion: 'Disponible media racion en la mayoria de productos', items: racionesItems },
  { id: 'carnes', nombre: 'Carnes y Platos Especiales', icono: 'Beef', items: carnesItems },
  { id: 'hamburguesas', nombre: 'Hamburguesas', icono: 'Sandwich', descripcion: 'Todas con carne 200gr y patatas fritas', items: hamburguesasItems },
  { id: 'platos_combinados', nombre: 'Platos Combinados', icono: 'Soup', items: platosCombinadosItems },
  { id: 'sandwich', nombre: 'Sandwich', icono: 'UtensilsCrossed', items: sandwichItems },
  { id: 'bocadillos', nombre: 'Bocadillos y Montados', icono: 'Cookie', descripcion: 'Precio Bocadillo / Montado', items: bocadillosItems },
];

const enMap = {
  'Ensalada Mixta': 'Mixed Salad',
  'Ensalada Cesar': 'Caesar Salad',
  'Ensalada de Burrata': 'Burrata Salad',
  'Croquetas de Jamon': 'Ham Croquettes',
  'Croquetas de Rabo de Vacuno': 'Oxtail Croquettes',
  'Croquetas de Espinaca y Queso de Cabra': 'Spinach and Goat Cheese Croquettes',
  'Croquetas de Boletus': 'Boletus Croquettes',
  'Croquetas de Chorizo y Huevo': 'Chorizo and Egg Croquettes',
  'Croquetas de Gambas al Ajillo': 'Garlic Shrimp Croquettes',
  'Croquetas de Cochinillo': 'Suckling Pig Croquettes',
  'Surtido de Croquetas': 'Assorted Croquettes',
  'Patatas Bravas': 'Spicy Potatoes',
  'Patatas Alioli': 'Garlic Mayo Potatoes',
  'Patatas Burgos': 'Burgos Potatoes',
  'Patatas Mixtas': 'Mixed Potatoes',
  'Revuelto de Gambas': 'Shrimp Scramble',
  'Revuelto de Morcilla': 'Blood Sausage Scramble',
  'Morcilla de Burgos con Pimientos de Padron': 'Burgos Blood Sausage with Padron Peppers',
  'Oreja a la Plancha': 'Grilled Pig Ear',
  'Alitas Fritas': 'Fried Chicken Wings',
  'Alitas con Salsa Barbacoa': 'BBQ Chicken Wings',
  'Fingers de Pollo': 'Chicken Fingers',
  'Tiras de Pollo Cajun': 'Cajun Chicken Strips',
  'Crocanti de Queso Gouda': 'Crispy Gouda Cheese',
  'Cheddar Bites con Jalapenos': 'Cheddar Bites with Jalapenos',
  'Bienmesabe': 'Bienmesabe',
  'Calamares a la Romana': 'Roman Style Squid',
  'Chopitos': 'Baby Squid',
  'Sepia a la Plancha': 'Grilled Cuttlefish',
  'Bacalao Rebozado': 'Battered Cod',
  'Huevos Rotos con Chistorra': 'Broken Eggs with Chistorra',
  'Huevos Rotos con Morcilla': 'Broken Eggs with Blood Sausage',
  'Huevos Rotos con Jamon': 'Broken Eggs with Ham',
  'Huevos Rotos con Chistorra y Rulo de Queso de Cabra': 'Broken Eggs with Chistorra and Goat Cheese Roll',
  'Huevos Rotos con Morcilla y Rulo de Queso de Cabra': 'Broken Eggs with Blood Sausage and Goat Cheese Roll',
  'Huevos Rotos con Jamon y Rulo de Queso de Cabra': 'Broken Eggs with Ham and Goat Cheese Roll',
  'Patatas Rancheras': 'Ranch Potatoes',
  'Patatas Pulled Pork Cheese': 'Pulled Pork Cheese Potatoes',
  'Salchipapas': 'Sausage and Fries',
  'Provoleta con Beicon y Jalapenos': 'Provoleta with Bacon and Jalapenos',
  'Provolone al Horno': 'Baked Provolone',
  'Gambon a la Plancha': 'Grilled Prawn',
  'Tequenos de Queso': 'Cheese Tequenos',
  'Rulo de Cabra Rebozado': 'Breaded Goat Cheese Roll',
  'Gyozas de Pollo y Verduras': 'Chicken and Vegetable Gyozas',
  'Costillar de Cerdo en Salsa Barbacoa': 'Pork Ribs in BBQ Sauce',
  'Carrillada en su Jugo': 'Braised Pork Cheeks in Juice',
  'Chuleton': 'Bone-in Steak',
  'Picanha': 'Picanha',
  'Entrana': 'Skirt Steak',
  'Entrecot': 'Entrecote',
  'Tira de Asado': 'Roast Cut',
  'Chuleta de Vaca': 'Beef Chop',
  'Cachopo Asturiano Tradicional': 'Traditional Asturian Cachopo',
  'Chivito Uruguayo': 'Uruguayan Chivito',
  'Milanesa Napolitana': 'Neapolitan Milanese',
  'Hamburguesa Normal': 'Standard Burger',
  'Hamburguesa Completa': 'Complete Burger',
  'Hamburguesa Burgos': 'Burgos Burger',
  'Hamburguesa de Escalope de Pollo': 'Chicken Cutlet Burger',
  'Hamburguesa de Escalope de Pollo Burgos': 'Burgos Chicken Cutlet Burger',
  'Hamburguesa La Cabrita': 'La Cabrita Burger',
  'Pastrami Burguer': 'Pastrami Burger',
  'Pulled Pork Purger': 'Pulled Pork Burger',
  'Burrata Burguer': 'Burrata Burger',
  'Extra de Carne': 'Extra Meat',
  'Lomo a la Plancha con Patatas y Huevo': 'Grilled Pork Loin with Potatoes and Egg',
  'Filete de Ternera con Patatas y Huevo': 'Beef Fillet with Potatoes and Egg',
  'Filete de Pollo a la Plancha con Patatas y Huevo': 'Grilled Chicken Fillet with Potatoes and Egg',
  'Escalope de Pollo con Patatas y Huevo': 'Chicken Cutlet with Potatoes and Egg',
  'Panceta con Patatas y Huevo': 'Bacon with Potatoes and Egg',
  'Chorizo Frito con Patatas y Huevo': 'Fried Chorizo with Potatoes and Egg',
  'Calamares con Patatas y Huevo': 'Squid with Potatoes and Egg',
  'Escalope de Ternera con Patatas y Huevo': 'Beef Cutlet with Potatoes and Egg',
  'Lomo a la Plancha con Ensalada': 'Grilled Pork Loin with Salad',
  'Filete de Ternera con Ensalada': 'Beef Fillet with Salad',
  'Filete de Pollo a la Plancha con Ensalada': 'Grilled Chicken Fillet with Salad',
  'Escalope de Pollo con Ensalada': 'Chicken Cutlet with Salad',
  'Escalope de Ternera con Ensalada': 'Beef Cutlet with Salad',
  'Calamares con Ensalada': 'Squid with Salad',
  'Sandwich Mixto': 'Mixed Sandwich',
  'Sandwich Mixto con Patatas Fritas': 'Mixed Sandwich with Fries',
  'Sandwich Mixto con Huevo Frito': 'Mixed Sandwich with Fried Egg',
  'Sandwich Mixto con Huevo y Patatas Fritas': 'Mixed Sandwich with Egg and Fries',
  'Sandwich Burgos': 'Burgos Sandwich',
  'Sandwich de Pollo': 'Chicken Sandwich',
  'Sandwich Vegetal': 'Vegetable Sandwich',
  'Bocadillo de Chistorra': 'Chistorra Sandwich',
  'Bocadillo de Lomo': 'Pork Loin Sandwich',
  'Bocadillo de Beicon': 'Bacon Sandwich',
  'Bocadillo de Panceta': 'Belly Bacon Sandwich',
  'Bocadillo de Ternera': 'Beef Sandwich',
  'Bocadillo de Morcilla de Burgos': 'Burgos Blood Sausage Sandwich',
  'Bocadillo de Escalope de Pollo': 'Chicken Cutlet Sandwich',
  'Bocadillo de Pollo a la Plancha': 'Grilled Chicken Sandwich',
  'Bocadillo de Tortilla Francesa': 'French Omelette Sandwich',
  'Bocadillo de Tortilla de Patatas': 'Spanish Omelette Sandwich',
  'Bocadillo de Oreja': 'Pig Ear Sandwich',
  'Bocadillo de Jamon Curado': 'Cured Ham Sandwich',
  'Bocadillo de Calamares': 'Squid Sandwich',
  'Bocadillo de Chorizo Frito': 'Fried Chorizo Sandwich',
  'Choripan': 'Choripan',
  'Tamarito': 'Tamarito',
  'Solomillo con Queso Brie': 'Sirloin with Brie Cheese',
  'Ingredientes Extra': 'Extra Ingredients',
  'Patatas Fritas Extra': 'Extra Fries',
  'Suplemento en Terraza': 'Terrace Surcharge',
};

function buildEn(catEs) {
  return {
    ...catEs,
    nombre: enMap[catEs.nombre] || catEs.nombre,
    descripcion: catEs.descripcion ? (catEs.descripcion.includes('media racion') ? 'Half portion available on most products' : catEs.descripcion) : undefined,
    items: catEs.items.map(it => ({ ...it, nombre: enMap[it.nombre] || it.nombre })),
  };
}

const nuevasEn = nuevasEs.map(buildEn);

const cartaEs = JSON.parse(readFileSync('src/data/carta.json', 'utf8'));
const cartaEn = JSON.parse(readFileSync('src/data/carta_en.json', 'utf8'));

cartaEs.categorias = cartaEs.categorias.filter(c => c.id !== 'tapas' && c.id !== 'raciones');
cartaEn.categorias = cartaEn.categorias.filter(c => c.id !== 'tapas' && c.id !== 'raciones');

cartaEs.categorias.push(...nuevasEs);
cartaEn.categorias.push(...nuevasEn);

cartaEs.version = '2.0';
cartaEn.version = '2.0';
cartaEs.ultima_actualizacion = '04-06-2026';
cartaEn.ultima_actualizacion = '04-06-2026';
cartaEs.notas = [
  'Los precios pueden variar sin previo aviso',
  'Consulte alergenos con el personal',
  'Algunos productos tienen suplemento en terraza',
  'Ingredientes extra y patatas fritas extra disponibles'
];
cartaEn.notas = [
  'Prices may change without notice',
  'Please ask staff about allergens',
  'Some products have terrace surcharge',
  'Extra ingredients and extra fries available'
];

writeFileSync('src/data/carta.json', JSON.stringify(cartaEs, null, 2));
writeFileSync('src/data/carta_en.json', JSON.stringify(cartaEn, null, 2));
console.log('Carta updated');
