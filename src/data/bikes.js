const bikes = [
    {
      id: 1,
      name: 'Montaña Épica',
      description: 'Ideal para senderos desafiantes y aventuras off-road.',
      image: '/images/montana-epica.jpg',
      price: 499.99,
      category: 'Montaña',
      brand: 'AdventureX',
      rating: 4.8,
      reviews: [
        { id: 'r1', user: 'Juan Pérez', rating: 5, comment: 'Excelente bicicleta, muy resistente.' },
        { id: 'r2', user: 'Ana López', rating: 4, comment: 'Buena para el precio.' },
      ],
    },
    {
      id: 2,
      name: 'Urbana Veloz',
      description: 'Perfecta para la ciudad y desplazamientos rápidos.',
      image: '/images/urbana-veloz.jpg',
      price: 349.50,
      category: 'Urbana',
      brand: 'CityGlide',
      rating: 4.2,
      reviews: [],
    },
    {
      id: 3,
      name: 'Carretera Ligera',
      description: 'Diseñada para velocidad y rendimiento en asfalto.',
      image: '/images/carretera-ligera.jpg',
      price: 799.00,
      category: 'Carretera',
      brand: 'SpeedMaster',
      rating: 4.9,
      reviews: [
        { id: 'r3', user: 'Carlos Gómez', rating: 5, comment: 'Increíblemente rápida y ligera.' },
      ],
    },
    {
      id: 4,
      name: 'Híbrida Confort',
      description: 'Versátil para ciudad y caminos rurales suaves.',
      image: '/images/hibrida-confort.jpg',
      price: 399.75,
      category: 'Híbrida',
      brand: 'ComfortRide',
      rating: 4.5,
      reviews: [
        { id: 'r4', user: 'Elena Vargas', rating: 4, comment: 'Muy cómoda para paseos largos.' },
        { id: 'r5', user: 'Pedro Díaz', rating: 5, comment: 'Excelente para mi día a día.' },
      ],
    },
    {
      id: 5,
      name: 'BMX Radical',
      description: 'Para trucos y acrobacias en skateparks.',
      image: '/images/bmx-radical.jpg',
      price: 249.99,
      category: 'BMX',
      brand: 'TrickPro',
      rating: 4.7,
      reviews: [],
    },
    {
      id: 6,
      name: 'Plegable Compacta',
      description: 'Fácil de transportar y almacenar en espacios pequeños.',
      image: '/images/plegable-compacta.jpg',
      price: 449.00,
      category: 'Plegable',
      brand: 'FoldAway',
      rating: 4.0,
      reviews: [
        { id: 'r6', user: 'Sofía Ruiz', rating: 3, comment: 'Cumple su función, pero podría ser más ligera.' },
      ],
    },
    {
      id: 7,
      name: 'Eléctrica Urbana',
      description: 'Con asistencia eléctrica para viajes sin esfuerzo.',
      image: '/images/electrica-urbana.jpg',
      price: 999.50,
      category: 'Eléctrica',
      brand: 'ElectroCity',
      rating: 4.6,
      reviews: [
        { id: 'r7', user: 'Javier Soto', rating: 5, comment: 'Me encanta, facilita mucho mis traslados.' },
      ],
    },
    {
      id: 8,
      name: 'Montaña Doble Suspensión',
      description: 'Para los terrenos más exigentes con máxima absorción.',
      image: '/images/montana-doble.jpg',
      price: 1299.00,
      category: 'Montaña',
      brand: 'FullRide',
      rating: 4.9,
      reviews: [],
    },
    {
      id: 9,
      name: 'Cruiser Clásica',
      description: 'Para paseos relajados con estilo vintage.',
      image: '/images/cruiser-clasica.jpg',
      price: 299.25,
      category: 'Cruiser',
      brand: 'RetroWheels',
      rating: 4.3,
      reviews: [
        { id: 'r8', user: 'Martina Flores', rating: 4, comment: 'Muy bonita y cómoda para paseos tranquilos.' },
      ],
    },
  ];
  
  export default bikes;