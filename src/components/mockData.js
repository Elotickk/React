const data = [
    {
        id: '1000',
        title: 'PROCESADOR INTEL CORE I3 12100',
        category: 'CPU_Intel',
        price: 25000,
        image: '/img/Productos/Procesadores/i3.jpg'
    },
    {
        id: '1001',
        title: 'PROCESADOR INTEL CORE I5 12400',
        category: 'CPU_Intel',
        price: 38000,
        image: '/img/Productos/Procesadores/i5.jpg'
    },
    {
        id: '1002',
        title: 'PROCESADOR INTEL CORE I7 12700K',
        category: 'CPU_Intel',
        price: 70000,
        image: '/img/Productos/Procesadores/i7.jpg'
    },
    {
        id: '1003',
        title: 'PROCESADOR INTEL CORE I9 12900K',
        category: 'CPU_Intel',
        price: 100000,
        image: '/img/Productos/Procesadores/i9.jpg'
    },
    {
        id: '2000',
        title: 'PROCESADOR AMD RYZEN 5 5600',
        category: 'CPU_AMD',
        price: 32000,
        image: '/img/Productos/Procesadores/Ryzen5600.jpg'
    },
    {
        id: '2001',
        title: 'PROCESADOR AMD RYZEN 7 5800X',
        category: 'CPU_AMD',
        price: 55000,
        image: '/img/Productos/Procesadores/Ryzen5800x.jpg'
    },
    {
        id: '2002',
        title: 'PROCESADOR AMD RYZEN 7 5800X3D',
        category: 'CPU_AMD',
        price: 68000,
        image: '/img/Productos/Procesadores/Ryzen5800x3d.jpg'
    },
    {
        id: '2003',
        title: 'PROCESADOR AMD RYZEN 9 5900X',
        category: 'CPU_AMD',
        price: 90000,
        image: '/img/Productos/Procesadores/Ryzen5900x.jpg'
    },
    {
        id: '2004',
        title: 'PROCESADOR AMD RYZEN 9 5950X',
        category: 'CPU_AMD',
        price: 90000,
        image: '/img/Productos/Procesadores/Ryzen5950x.jpg'
    },
    {
        id: '3000',
        title: 'PLACA DE VIDEO NVIDIA MSI RTX 3070TI',
        category: 'GPU_Nvidia',
        price: 150000,
        image: '/img/Productos/Placas/GPU_Nvidia_MSI_RTX3070TI.jpg'
    },
    {
        id: '3001',
        title: 'PLACA DE VIDEO NVIDIA ZOTAC RTX 3070TI',
        category: 'GPU_Nvidia',
        price: 150000,
        image: '/img/Productos/Placas/GPU_Nvidia_ZOTAC_RTX3070TI.jpg'
    },
    {
        id: '3002',
        title: 'PLACA DE VIDEO NVIDIA ASUS RTX 3080TI',
        category: 'GPU_Nvidia',
        price: 250000,
        image: '/img/Productos/Placas/GPU_Nvidia_MSI_RTX3080ti.jpg'
    },
    {
        id: '3003',
        title: 'PLACA DE VIDEO NVIDIA MSI RTX 3080TI',
        category: 'GPU_Nvidia',
        price: 250000,
        image: '/img/Productos/Placas/GPU_Nvidia_ASUS_RTX3080TI.jpg'
    },
    {
        id: '3004',
        title: 'PLACA DE VIDEO NVIDIA ASUS RTX 3090',
        category: 'GPU_Nvidia',
        price: 400000,
        image: '/img/Productos/Placas/GPU_Nvidia_ASUS_RTX3090.jpg'
    },
    {
        id: '3005',
        title: 'PLACA DE VIDEO NVIDIA MSI RTX 3090',
        category: 'GPU_Nvidia',
        price: 400000,
        image: '/img/Productos/Placas/GPU_Nvidia_MSI_RTX3090.jpg'
    },
    {
        id: '4000',
        title: 'PLACA DE VIDEO AMD ASROCK RX6700XT',
        category: 'GPU_AMD',
        price: 150000,
        image: '/img/Productos/Placas/GPU_AMD_Asrock_RX6700XT.jpg'
    },
    {
        id: '4001',
        title: 'PLACA DE VIDEO AMD ASUS RX6800XT',
        category: 'GPU_AMD',
        price: 200000,
        image: '/img/Productos/Placas/GPU_AMD_ASUS_RX6800XT.jpg'
    },
    {
        id: '4002',
        title: 'PLACA DE VIDEO AMD POWERCOLOR RX6900XT',
        category: 'GPU_AMD',
        price: 400000,
        image: '/img/Productos/Placas/GPU_AMD_Powecolor_RX6900XT.jpg'
    },
    {
        id: '4003',
        title: 'PLACA DE VIDEO AMD XFX RX6900XT',
        category: 'GPU_AMD',
        price: 400000,
        image: '/img/Productos/Placas/GPU_AMD_XFX_RX6900XT.jpg'
    },
    {
        id: '5000',
        title: 'MOTHERBOARD INTEL GIGABYTE AORUS Z690',
        category: 'Mother_Intel',
        price: 100000,
        image: '/img/Productos/Motherboard/Mother_Intel_GigaZ690Aorus.jpg'
    },
    {
        id: '5001',
        title: 'MOTHERBOARD INTEL MSI UNIFY Z690',
        category: 'Mother_Intel',
        price: 110000,
        image: '/img/Productos/Motherboard/Mother_Intel_MSIZ690Unify.jpg'
    },
    {
        id: '5002',
        title: 'MOTHERBOARD INTEL ASUS ROG Z690',
        category: 'Mother_Intel',
        price: 130000,
        image: '/img/Productos/Motherboard/Mother_Intel_RogMaxZ690.jpg'
    },
    {
        id: '6000',
        title: 'MOTHERBOARD AMD MSI X570',
        category: 'Mother_AMD',
        price: 100000,
        image: '/img/Productos/Motherboard/Mother_AMD_MSIX570SEdge.jpg'
    },
    {
        id: '6001',
        title: 'MOTHERBOARD AMD GIGABYTE AORUS X570',
        category: 'Mother_AMD',
        price: 110000,
        image: '/img/Productos/Motherboard/Mother_AMD_GigaX570SAorus.jpg'
    },
    {
        id: '6002',
        title: 'MOTHERBOARD AMD ASUS CROSSHAIR X570',
        category: 'Mother_AMD',
        price: 130000,
        image: '/img/Productos/Motherboard/Mother_AMD_AsusX570CrosshairVIII.jpg'
    },
    {
        id: '7000',
        title: 'MEMORIA RAM DDR4 TEAM 4GB 2400MHZ',
        category: 'RAM',
        price: 5000,
        image: '/img/Productos/RAM/RAMDDR4_Team4GB.jpg'
    },
    {
        id: '7001',
        title: 'MEMORIA RAM DDR4 ADATA 16GB 3200MHZ',
        category: 'RAM',
        price: 12000,
        image: './img/Productos/RAM/RAMDDR4_ADATA16GB3200.jpg'
    },
    {
        id: '7002',
        title: 'MEMORIA RAM DDR4 ADATA 16GB 3600MHZ',
        category: 'RAM',
        price: 13500,
        image: '/img/Productos/RAM/RAMDDR4_ADATA16GB3600.jpg'
    },
    {
        id: '7003',
        title: 'MEMORIA RAM DDR5 TEAM 32GB 5600MHZ',
        category: 'RAM',
        price: 13500,
        image: '/img/Productos/RAM/RAMDDR5_Team32GB.jpg'
    }
];

export default data