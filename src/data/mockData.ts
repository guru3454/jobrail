import { ServiceCategory, Professional, ServiceJob, StructuredQuote, Property, VerifiedReview, Dispute } from '../types';

export const NAIROBI_ESTATES = [
  'Kilimani',
  'Westlands',
  'Karen',
  'Lavington',
  'Kileleshwa',
  'South C',
  'South B',
  'Parklands',
  'Roysambu',
  'Langata',
  'Ngong Road',
  'Thome / Garden Estate',
  'Runda',
  'Muthaiga',
  'Kasarani',
  'Embakasi',
  'Kahawa Sukari',
  'Syokimau / Mombasa Road',
  'Utawala',
  'Ruaka (Kiambu Border)'
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'plumbing',
    name: 'Plumbing & Water Systems',
    slug: 'plumbing',
    icon: 'Wrench',
    description: 'Leak detection, pipe repair, blocked drains, water heaters, booster pumps, tank installations, and full sanitary ware fitting.',
    subServices: [
      'Leak repairs & pipe bursts',
      'Blocked drainage & sewer unblocking',
      'Instant water heater & solar installation',
      'Water pressure booster pump repair',
      'Overhead & underground tank installation',
      'Bathroom & toilet fixture fitting'
    ],
    startingPriceKES: 1500,
    popular: true
  },
  {
    id: 'electrical',
    name: 'Electrical & Backup Power',
    slug: 'electrical',
    icon: 'Zap',
    description: 'Certified domestic and commercial electrical wiring, circuit breaker tripping fixes, solar inverters, socket repairs, and lighting.',
    subServices: [
      'Short circuit & fault tracing',
      'Socket & switch replacement',
      'Inverter & solar backup installation',
      'LED lighting & chandelier mounting',
      'Main distribution board (DB) upgrades',
      'Generator transfer switch installation'
    ],
    startingPriceKES: 1800,
    popular: true
  },
  {
    id: 'carpentry',
    name: 'Carpentry & Woodwork',
    slug: 'carpentry',
    icon: 'Hammer',
    description: 'Custom cabinetry, hardwood furniture repair, interior door hanging, lock replacement, wardrobes, and kitchen counter remodels.',
    subServices: [
      'Custom kitchen cabinets & MDF fitting',
      'Solid wood door hanging & lock installation',
      'Wardrobe building & shelving units',
      'Dining set & sofa frame repair',
      'Wood floor sanding & polishing',
      'Window frame & curtain pelmet fixes'
    ],
    startingPriceKES: 2000,
    popular: true
  },
  {
    id: 'painting',
    name: 'Painting & Surface Finishing',
    slug: 'painting',
    icon: 'Paintbrush',
    description: 'Interior and exterior emulsion coats, anti-damp treatment, skim coating, wallpaper installation, and exterior weather-guard painting.',
    subServices: [
      'Full interior apartment repainting',
      'Dampness, mould & peeling paint remediation',
      'Plaster skim coating & ceiling finishes',
      'Exterior perimeter wall & facade coating',
      'Wood varnish & metal primer finishing',
      'Feature accent walls & textured paint'
    ],
    startingPriceKES: 2500,
    popular: false
  },
  {
    id: 'masonry',
    name: 'Masonry & Tiling',
    slug: 'masonry',
    icon: 'Layers',
    description: 'Porcelain and ceramic floor tiling, structural plastering, crack repairs, paving blocks (cabro), and stone wall repairs.',
    subServices: [
      'Floor & wall ceramic/porcelain tiling',
      'Grout replacement & broken tile fix',
      'Wall crack injection & plastering',
      'Cabro paving installation & levelling',
      'Perimeter wall foundation & column repair',
      'Bathroom waterproofing screed'
    ],
    startingPriceKES: 2500,
    popular: false
  },
  {
    id: 'appliance-repair',
    name: 'Appliance Repair',
    slug: 'appliance-repair',
    icon: 'Cpu',
    description: 'Specialist diagnostics and genuine spare parts replacement for washing machines, double-door fridges, cookers, and microwaves.',
    subServices: [
      'Front & top load washing machine repair',
      'Refrigerator gas refill & compressor fix',
      'Electric & gas cooker burner servicing',
      'Microwave & oven heating element repair',
      'Dishwasher draining & pump repair',
      'Smart TV motherboard & backlight fix'
    ],
    startingPriceKES: 2200,
    popular: true
  },
  {
    id: 'cleaning',
    name: 'Deep Cleaning & Hygiene',
    slug: 'cleaning',
    icon: 'Sparkles',
    description: 'Move-in/move-out deep sanitisation, upholstery steam cleaning, window washing, mattress extraction, and post-construction scrubbing.',
    subServices: [
      'Move-in & move-out tenancy deep clean',
      'Sofa & fabric upholstery steam extraction',
      'Mattress sanitisation & stain removal',
      'Post-renovation dust & paint spot scrub',
      'Kitchen degreasing & oven deep clean',
      'Commercial office janitorial service'
    ],
    startingPriceKES: 3000,
    popular: false
  },
  {
    id: 'moving-delivery',
    name: 'Moving & Transport',
    slug: 'moving-delivery',
    icon: 'Truck',
    description: 'Careful household furniture moving, bubble wrapping, disassembly/assembly, and reliable closed-truck transit across Nairobi.',
    subServices: [
      '1 to 3 bedroom residential moving',
      'Furniture wrapping & protective packing',
      'Dismantling & reassembly of beds/wardrobes',
      'Office relocation & IT gear transit',
      'Curtain track dismantling & re-hanging',
      'Single heavy item transport'
    ],
    startingPriceKES: 5000,
    popular: false
  },
  {
    id: 'tech-it',
    name: 'Tech, CCTV & Smart Home',
    slug: 'tech-it',
    icon: 'ShieldCheck',
    description: 'IP & analogue CCTV installation, mesh Wi-Fi optimization, structured cabling, smart door locks, and biometric access control.',
    subServices: [
      'High-definition CCTV camera installation',
      'Home & office Wi-Fi dead-zone extension',
      'Smart digital door lock & video doorbell',
      'Electric fence energizer maintenance',
      'Structured LAN cabling & server rack setup',
      'Computer & NAS backup troubleshooting'
    ],
    startingPriceKES: 3500,
    popular: false
  }
];

export const PROFESSIONALS: Professional[] = [
  {
    id: 'pro-001',
    name: 'John Otieno',
    title: 'Senior Water Systems & Drainage Technician',
    category: 'Plumbing & Water Systems',
    specialties: ['High-Pressure Boosters', 'Sewer Unblocking', 'Solar Water Heaters', 'PEX & PPR Piping'],
    location: 'Kilimani & Ngong Road',
    county: 'Nairobi',
    phone: '0742102098',
    whatsapp: '+254742102098',
    yearsExperience: 9,
    rating: 4.9,
    completedJobs: 142,
    repeatCustomersRate: 38,
    onTimeRate: 97,
    responseRate: 'Under 15 mins',
    startingPriceKES: 1500,
    availability: 'Available Today',
    languages: ['English', 'Swahili', 'Luo'],
    verification: {
      identity: 'VERIFIED',
      skills: 'VERIFIED',
      business: 'VERIFIED'
    },
    avatar: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&auto=format&fit=crop&q=80',
    bio: 'Government Trade-Test Grade I certified plumber with over 9 years working across upscale residential complexes in Kilimani, Kileleshwa, and Karen. Specialized in acoustic leak detection and pressure pump recalibration.',
    portfolio: [
      {
        title: 'Complete PPR Piping Overhaul - Lavington Duplex',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80',
        description: 'Replaced corroded galvanized iron pipes with hygienic PN20 PPR piping. Eliminated low pressure across 3 bathrooms.'
      },
      {
        title: 'Davis & Shirtliff Booster Pump Installation',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&fit=crop&q=80',
        description: 'Installed 0.75kW automatic pressure switch pump with 100L bladder tank.'
      }
    ],
    defaultWarrantyDays: 30
  },
  {
    id: 'pro-002',
    name: 'Grace Wanjiku',
    title: 'EPRA-Licensed Electrical Engineer & Solar Specialist',
    category: 'Electrical & Backup Power',
    specialties: ['Inverter Systems', 'DB Box Rewiring', 'Fault Finding', 'Surge Protection'],
    location: 'Westlands & Parklands',
    county: 'Nairobi',
    phone: '0742102098',
    whatsapp: '+254742102098',
    yearsExperience: 8,
    rating: 4.95,
    completedJobs: 98,
    repeatCustomersRate: 42,
    onTimeRate: 99,
    responseRate: 'Under 10 mins',
    startingPriceKES: 2000,
    availability: 'Available Today',
    languages: ['English', 'Swahili', 'Kikuyu'],
    verification: {
      identity: 'VERIFIED',
      skills: 'VERIFIED',
      business: 'VERIFIED'
    },
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    bio: 'EPRA Class B licensed electrical installer. Expert in resolving recurrent circuit trips, solar inverter hybrid setups, and commercial office electrical balancing across Westlands and Parklands.',
    portfolio: [
      {
        title: '5kVA Hybrid Solar Inverter with Lithium Iron Battery',
        image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=600&auto=format&fit=crop&q=80',
        description: 'Installed seamless automatic changeover ensuring zero downtime for a home office in Kitisuru.'
      }
    ],
    defaultWarrantyDays: 60
  },
  {
    id: 'pro-003',
    name: 'Peter Mwangi',
    title: 'Master Joiner & Interior Cabinet Maker',
    category: 'Carpentry & Woodwork',
    specialties: ['Modular Kitchens', 'MDF Wardrobes', 'Door Hanging', 'Hardwood Restoration'],
    location: 'Karen & Langata',
    county: 'Nairobi',
    phone: '0742102098',
    whatsapp: '+254742102098',
    yearsExperience: 12,
    rating: 4.85,
    completedJobs: 114,
    repeatCustomersRate: 35,
    onTimeRate: 94,
    responseRate: 'Under 30 mins',
    startingPriceKES: 2500,
    availability: 'Next Day',
    languages: ['English', 'Swahili'],
    verification: {
      identity: 'VERIFIED',
      skills: 'VERIFIED',
      business: 'PENDING'
    },
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    bio: 'Specialist in custom hardwood joinery and modern melamine/MDF kitchen cabinetry. Over a decade serving residences in Karen, Runda and Langata with seamless edge-banding and precision German hinges.',
    portfolio: [
      {
        title: 'Soft-Close Acrylic Finished Kitchen Cabinets',
        image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=80',
        description: 'Installed high-gloss moisture-resistant cabinetry with granite stone worktops in Karen.'
      }
    ],
    defaultWarrantyDays: 90
  },
  {
    id: 'pro-004',
    name: 'Brian Mutua',
    title: 'Certified Domestic Appliance Diagnostic Expert',
    category: 'Appliance Repair',
    specialties: ['Inverter Washing Machines', 'Double Door Fridges', 'Oven Controls', 'Beko & Samsung'],
    location: 'South C & Nairobi West',
    county: 'Nairobi',
    phone: '0742102098',
    whatsapp: '+254742102098',
    yearsExperience: 7,
    rating: 4.88,
    completedJobs: 86,
    repeatCustomersRate: 29,
    onTimeRate: 96,
    responseRate: 'Under 20 mins',
    startingPriceKES: 2200,
    availability: 'Available Today',
    languages: ['English', 'Swahili', 'Kamba'],
    verification: {
      identity: 'VERIFIED',
      skills: 'VERIFIED',
      business: 'VERIFIED'
    },
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    bio: 'Trained technician for Bosch, Samsung, LG, and Whirlpool appliances. Known for swift on-site PCB repairs and genuine compressor replacements with transparent diagnostic reports.',
    portfolio: [
      {
        title: 'LG Direct Drive 9KG Inverter Motor & Drum Bearing Overhaul',
        image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&auto=format&fit=crop&q=80',
        description: 'Repaired severe vibration and noise by replacing worn spider arm assembly.'
      }
    ],
    defaultWarrantyDays: 45
  },
  {
    id: 'pro-005',
    name: 'Mercy Achieng',
    title: 'Deep Hygiene & Post-Tenancy Cleaning Director',
    category: 'Deep Cleaning & Hygiene',
    specialties: ['Steam Extraction', 'Post-Construction Scrub', 'Mould Sterilization', 'Mattress Wash'],
    location: 'Roysambu & Thika Road',
    county: 'Nairobi',
    phone: '0742102098',
    whatsapp: '+254742102098',
    yearsExperience: 6,
    rating: 4.92,
    completedJobs: 130,
    repeatCustomersRate: 46,
    onTimeRate: 98,
    responseRate: 'Under 15 mins',
    startingPriceKES: 3000,
    availability: 'Available Today',
    languages: ['English', 'Swahili'],
    verification: {
      identity: 'VERIFIED',
      skills: 'VERIFIED',
      business: 'VERIFIED'
    },
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    bio: 'Leader of a trained 4-person professional cleaning squad equipped with industrial Kärcher extraction machines and eco-friendly disinfectants. Preferred partner for property management turnovers.',
    portfolio: [
      {
        title: '3-Bedroom Penthouse Move-Out Restoration - Roysambu',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&auto=format&fit=crop&q=80',
        description: 'Complete tile acid wash, grout scrubbing, balcony power-wash and kitchen degreasing.'
      }
    ],
    defaultWarrantyDays: 14
  }
];

export const INITIAL_STRUCTURED_QUOTES: StructuredQuote[] = [
  {
    id: 'quote-001',
    requestId: 'req-001',
    proId: 'pro-001',
    proName: 'John Otieno',
    proCategory: 'Plumbing & Water Systems',
    proAvatar: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&auto=format&fit=crop&q=80',
    proRating: 4.9,
    proCompletedJobs: 142,
    proVerification: { identity: 'VERIFIED', skills: 'VERIFIED', business: 'VERIFIED' },
    labourKES: 2000,
    materialsKES: 1500,
    callOutKES: 500,
    totalKES: 4000,
    warrantyDays: 30,
    estimatedArrival: 'Today, 2:00 PM',
    estimatedDuration: '1.5 hours',
    notes: 'Includes replacement of heavy-duty chrome bottle trap and new brass flexi connectors. 30-day warranty covered by JobRail.',
    status: 'ACCEPTED',
    createdAt: '2026-09-16T10:30:00Z'
  },
  {
    id: 'quote-002',
    requestId: 'req-001',
    proId: 'pro-006',
    proName: 'David Kilonzo',
    proCategory: 'Plumbing & Water Systems',
    proAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
    proRating: 4.75,
    proCompletedJobs: 64,
    proVerification: { identity: 'VERIFIED', skills: 'VERIFIED', business: 'PENDING' },
    labourKES: 1500,
    materialsKES: 2000,
    callOutKES: 300,
    totalKES: 3800,
    warrantyDays: 14,
    estimatedArrival: 'Today, 3:30 PM',
    estimatedDuration: '2 hours',
    notes: 'Standard PVC bottle trap replacement with Teflon seal. 14 days warranty on workmanship.',
    status: 'DECLINED',
    createdAt: '2026-09-16T10:45:00Z'
  },
  {
    id: 'quote-003',
    requestId: 'req-001',
    proId: 'pro-007',
    proName: 'Erick Odhiambo',
    proCategory: 'Plumbing & Water Systems',
    proAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
    proRating: 4.82,
    proCompletedJobs: 89,
    proVerification: { identity: 'VERIFIED', skills: 'PENDING', business: 'VERIFIED' },
    labourKES: 2200,
    materialsKES: 0,
    callOutKES: 0,
    totalKES: 2200,
    warrantyDays: 30,
    estimatedArrival: 'Today, 4:00 PM',
    estimatedDuration: '1 hour',
    notes: 'Labour only; client purchases materials or reimburses against receipt. Free call-out in Kilimani.',
    status: 'PENDING',
    createdAt: '2026-09-16T11:00:00Z'
  }
];

export const INITIAL_JOBS: ServiceJob[] = [
  {
    id: 'JR-000001',
    requestId: 'req-001',
    customerId: 'cust-101',
    customerName: 'Edwin Anyango',
    customerPhone: '0742102098',
    proId: 'pro-001',
    proName: 'John Otieno',
    proPhone: '0742102098',
    proAvatar: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&auto=format&fit=crop&q=80',
    serviceCategory: 'Plumbing & Water Systems',
    serviceName: 'Kitchen Sink Leak & Trap Replacement',
    problemDescription: 'Water actively leaking underneath kitchen sink into cupboard floor. Waste pipe appears cracked at the joint.',
    location: {
      county: 'Nairobi',
      estate: 'Kilimani',
      specificAddress: 'Rose Avenue Court, Block B, Apt 304'
    },
    urgency: 'STANDARD',
    scheduledDate: '2026-09-16',
    scheduledTimeSlot: '2:00 PM – 4:00 PM',
    status: 'WORK_IN_PROGRESS',
    selectedQuote: INITIAL_STRUCTURED_QUOTES[0],
    proofOfWork: {
      beforePhotos: [
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80'
      ],
      duringPhotos: [
        'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&fit=crop&q=80'
      ],
      afterPhotos: [
        'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&auto=format&fit=crop&q=80'
      ],
      materialsUsed: [
        'Heavy-duty Chrome 40mm Bottle Trap',
        '2x Stainless Steel 1/2" Flexi Hoses (60cm)',
        'Plumbers Silicone & High-Grade PTFE Tape'
      ],
      notes: 'Old cracked plastic drain trap successfully replaced with chrome bottle trap. New reinforced flexi pipes installed and pressure-tested for 15 minutes with no leaks.',
      completedAt: '2026-09-16T14:45:00Z'
    },
    warranty: {
      days: 30,
      startDate: '2026-09-16',
      expiresDate: '2026-10-16',
      status: 'ACTIVE'
    },
    payment: {
      amountKES: 4000,
      method: 'M_PESA',
      status: 'PENDING'
    },
    customerConfirmed: false,
    timeline: [
      {
        status: 'LOOKING_FOR_PROS',
        title: 'Service Request Created',
        time: 'Today, 10:15 AM',
        note: 'Customer posted plumbing issue with photos in Kilimani.',
        actor: 'CUSTOMER'
      },
      {
        status: 'QUOTES_RECEIVED',
        title: '3 Structured Quotes Received',
        time: 'Today, 11:00 AM',
        note: 'Received quotes from John Otieno, David Kilonzo, and Erick Odhiambo.',
        actor: 'SYSTEM'
      },
      {
        status: 'ACCEPTED',
        title: 'Quote Accepted by Customer',
        time: 'Today, 11:30 AM',
        note: 'Customer chose John Otieno (Total KSh 4,000, 30-day warranty).',
        actor: 'CUSTOMER'
      },
      {
        status: 'SCHEDULED',
        title: 'Appointment Confirmed',
        time: 'Today, 11:35 AM',
        note: 'Scheduled for 2:00 PM – 4:00 PM.',
        actor: 'PROFESSIONAL'
      },
      {
        status: 'ON_THE_WAY',
        title: 'Professional En Route',
        time: 'Today, 1:40 PM',
        note: 'John Otieno departing from Ngong Road workshop.',
        actor: 'PROFESSIONAL'
      },
      {
        status: 'ARRIVED',
        title: 'Professional Arrived at Site',
        time: 'Today, 2:05 PM',
        note: 'Arrived at Rose Avenue Court, Apt 304.',
        actor: 'PROFESSIONAL'
      },
      {
        status: 'WORK_IN_PROGRESS',
        title: 'Work In Progress & Evidence Uploaded',
        time: 'Today, 2:30 PM',
        note: 'Disassembled faulty drain trap. Installing replacement chrome fitting and testing pressure.',
        actor: 'PROFESSIONAL'
      }
    ],
    createdAt: '2026-09-16T10:15:00Z',
    updatedAt: '2026-09-16T14:45:00Z'
  },
  {
    id: 'JR-000002',
    requestId: 'req-002',
    customerId: 'cust-101',
    customerName: 'Edwin Anyango',
    customerPhone: '0742102098',
    proId: 'pro-002',
    proName: 'Grace Wanjiku',
    proPhone: '0742102098',
    proAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
    serviceCategory: 'Electrical & Backup Power',
    serviceName: 'Main Circuit Breaker Tripping & Surge Suppressor',
    problemDescription: 'Frequent tripping whenever the electric water heater turns on simultaneously with the oven. Needs load balancing and modern surge breaker.',
    location: {
      county: 'Nairobi',
      estate: 'Kilimani',
      specificAddress: 'Rose Avenue Court, Block B, Apt 304'
    },
    urgency: 'URGENT',
    scheduledDate: '2026-09-12',
    scheduledTimeSlot: '10:00 AM – 12:00 PM',
    status: 'COMPLETED',
    selectedQuote: {
      id: 'quote-004',
      requestId: 'req-002',
      proId: 'pro-002',
      proName: 'Grace Wanjiku',
      proCategory: 'Electrical & Backup Power',
      proAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
      proRating: 4.95,
      proCompletedJobs: 98,
      proVerification: { identity: 'VERIFIED', skills: 'VERIFIED', business: 'VERIFIED' },
      labourKES: 3500,
      materialsKES: 3700,
      callOutKES: 0,
      totalKES: 7200,
      warrantyDays: 60,
      estimatedArrival: 'Sep 12, 10:00 AM',
      estimatedDuration: '2 hours',
      notes: 'Upgraded 32A Hager MCB and installed single-phase class II surge arrester.',
      status: 'ACCEPTED',
      createdAt: '2026-09-11T14:00:00Z'
    },
    proofOfWork: {
      beforePhotos: ['https://images.unsplash.com/photo-1509391365360-2e959784a276?w=600&auto=format&fit=crop&q=80'],
      duringPhotos: ['https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80'],
      afterPhotos: ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80'],
      materialsUsed: ['Hager 32A Type C MCB', 'Dehn 40kA Surge Protection Module'],
      notes: 'Rebalanced phase load and verified insulation resistance at 250M-Ohm.',
      completedAt: '2026-09-12T12:15:00Z'
    },
    warranty: {
      days: 60,
      startDate: '2026-09-12',
      expiresDate: '2026-11-11',
      status: 'ACTIVE'
    },
    payment: {
      amountKES: 7200,
      method: 'M_PESA',
      status: 'PAID',
      mpesaNumber: '0742102098',
      transactionRef: 'QHK9283KLA',
      paidAt: '2026-09-12T12:20:00Z'
    },
    customerConfirmed: true,
    timeline: [
      {
        status: 'LOOKING_FOR_PROS',
        title: 'Service Request Created',
        time: 'Sep 11, 2:00 PM',
        actor: 'CUSTOMER'
      },
      {
        status: 'ACCEPTED',
        title: 'Quote Accepted',
        time: 'Sep 11, 4:30 PM',
        actor: 'CUSTOMER'
      },
      {
        status: 'WORK_IN_PROGRESS',
        title: 'Electrical Work Executed',
        time: 'Sep 12, 10:30 AM',
        actor: 'PROFESSIONAL'
      },
      {
        status: 'AWAITING_APPROVAL',
        title: 'Work Completed & Evidence Submitted',
        time: 'Sep 12, 12:15 PM',
        actor: 'PROFESSIONAL'
      },
      {
        status: 'COMPLETED',
        title: 'Approved & Paid via M-Pesa',
        time: 'Sep 12, 12:22 PM',
        note: 'M-Pesa Ref QHK9283KLA verified. 60-day warranty activated.',
        actor: 'CUSTOMER'
      }
    ],
    createdAt: '2026-09-11T14:00:00Z',
    updatedAt: '2026-09-12T12:22:00Z'
  },
  {
    id: 'JR-000003',
    requestId: 'req-003',
    customerId: 'cust-101',
    customerName: 'Edwin Anyango',
    customerPhone: '0742102098',
    serviceCategory: 'Tech, CCTV & Smart Home',
    serviceName: '4-Channel Full HD Night Vision CCTV Installation',
    problemDescription: 'Looking to secure perimeter gates and driveway. Need remote viewing on Android and iPhone devices.',
    location: {
      county: 'Nairobi',
      estate: 'Karen',
      specificAddress: 'Mbagathi Ridge Estate'
    },
    urgency: 'STANDARD',
    scheduledDate: '2026-09-18',
    scheduledTimeSlot: '9:00 AM – 1:00 PM',
    status: 'QUOTES_RECEIVED',
    timeline: [
      {
        status: 'LOOKING_FOR_PROS',
        title: 'Service Request Submitted',
        time: 'Yesterday, 3:00 PM',
        actor: 'CUSTOMER'
      },
      {
        status: 'QUOTES_RECEIVED',
        title: '2 Quotes Received from Certified Installers',
        time: 'Today, 8:40 AM',
        note: 'Compare quotes from Hikvision certified engineers.',
        actor: 'SYSTEM'
      }
    ],
    createdAt: '2026-09-15T15:00:00Z',
    updatedAt: '2026-09-16T08:40:00Z',
    customerConfirmed: false
  }
];

export const INITIAL_PROPERTIES: Property[] = [
  {
    id: 'prop-001',
    name: 'Karen Heights Residency',
    type: 'Residential Apartments',
    location: 'Karen, Nairobi',
    unitsCount: 16,
    openMaintenanceCount: 2,
    totalExpenditureKES: 84500
  },
  {
    id: 'prop-002',
    name: 'Kilimani Apex Suites',
    type: 'Residential Apartments',
    location: 'Wood Avenue, Kilimani, Nairobi',
    unitsCount: 24,
    openMaintenanceCount: 1,
    totalExpenditureKES: 142000
  },
  {
    id: 'prop-003',
    name: 'Westlands Commercial Tower (Floor 4-6)',
    type: 'Commercial Office',
    location: 'Parklands Road, Westlands',
    unitsCount: 8,
    openMaintenanceCount: 0,
    totalExpenditureKES: 215000
  }
];

export const INITIAL_REVIEWS: VerifiedReview[] = [
  {
    id: 'rev-001',
    jobId: 'JR-000002',
    proId: 'pro-002',
    customerName: 'Edwin Anyango',
    rating: 5,
    quality: 5,
    professionalism: 5,
    communication: 5,
    timeliness: 5,
    value: 5,
    comment: 'Grace solved an electrical breaker tripping headache that two previous fundis failed to diagnose. She tested every loop with a digital multimeter and provided clean documentation before taking payment. Exceptional professionalism!',
    date: '12 September 2026',
    serviceName: 'Main Circuit Breaker Tripping & Surge Suppressor',
    verifiedJob: true
  },
  {
    id: 'rev-002',
    jobId: 'JR-000045',
    proId: 'pro-001',
    customerName: 'Wanjiru Kamau',
    rating: 5,
    quality: 5,
    professionalism: 5,
    communication: 4,
    timeliness: 5,
    value: 5,
    comment: 'John arrived right on time at 2 PM with genuine PPR pipes and pressure gauges. No hidden surprises on the quote. Water pressure in our master bathroom is finally restored.',
    date: '28 August 2026',
    serviceName: 'Bathroom Fixture & Pressure Pump Overhaul',
    verifiedJob: true
  }
];

export const INITIAL_DISPUTES: Dispute[] = [
  {
    id: 'disp-001',
    jobId: 'JR-000078',
    raisedBy: 'Dr. Michael Kariuki',
    role: 'CUSTOMER',
    reason: 'Unexpected charges for supplementary fittings',
    description: 'Pro requested additional KSh 1,200 for pipe sealant not itemized in accepted quote.',
    status: 'UNDER_REVIEW',
    createdAt: '2026-09-14T09:30:00Z',
    resolutionNotes: 'Admin mediation initiated. Pro invoice compared against agreed structured quote.'
  }
];
