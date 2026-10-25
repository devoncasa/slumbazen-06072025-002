import type {Product} from './data/galleryData';
const IMAGE_ASSETS = {
  hero_backgrounds: [
    '/assets/catalogue-00.webp',  
    '/assets/catalogue-01.webp',  
    '/assets/catalogue-02.webp',  
    '/assets/catalogue-03.webp',  
    '/assets/catalogue-04.webp',  
    '/assets/catalogue-05.webp',  
    '/assets/catalogue-06.webp',  
    '/assets/catalogue-07.webp',  
    '/assets/catalogue-08.webp',  
    '/assets/catalogue-09.webp'
  ],
  white_striped: ['/assets/catalogue-00.webp', '/assets/catalogue-02.webp', '/assets/catalogue-04.webp', '/assets/catalogue-09.webp', '/assets/catalogue-10.webp', '/assets/catalogue-12.webp', '/assets/catalogue-15.webp', '/assets/catalogue-18.webp', '/assets/catalogue-21.webp', '/assets/catalogue-23.webp', '/assets/catalogue-26.webp'],
  white_plain: ['/assets/catalogue-01.webp', '/assets/catalogue-03.webp', '/assets/catalogue-05.webp', '/assets/catalogue-07.webp', '/assets/catalogue-08.webp', '/assets/catalogue-28.webp', '/assets/catalogue-29.webp', '/assets/catalogue-30.webp', '/assets/catalogue-31.webp', '/assets/catalogue-37.webp', '/assets/catalogue-39.webp', '/assets/catalogue-40.webp'],
  color_plain: ['/assets/catalogue-40.webp', '/assets/catalogue-06.webp', '/assets/catalogue-41.webp', '/assets/catalogue-42.webp', '/assets/catalogue-43.webp', '/assets/catalogue-44.webp'],
  towel: ['/assets/catalogue-45.webp', '/assets/catalogue-46.webp', '/assets/catalogue-47.webp', '/assets/catalogue-48.webp'],
  bolster: ['/assets/catalogue-49.webp', '/assets/catalogue-50.webp'],
  decorative_bedding: [ '/assets/catalogue-03.webp', '/assets/catalogue-00.webp', '/assets/catalogue-51.webp', '/assets/catalogue-52.webp', '/assets/catalogue-09.webp', '/assets/catalogue-53.webp', '/assets/catalogue-54.webp', '/assets/catalogue-01.webp', '/assets/catalogue-05.webp', '/assets/catalogue-55.webp', '/assets/catalogue-56.webp', '/assets/catalogue-02.webp' ]
};

const getDeterministicImage = (category: keyof typeof IMAGE_ASSETS, id: string): string => {
  const images = IMAGE_ASSETS[category];
  if (!images || images.length === 0) return '/assets/catalogue-57.webp'; // Fallback image
  const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const index = hash % images.length;
  return images[index];
};


export const rawProductData = [
    // --- Bedding Data ---
    { code: 'FS-S35-ST370P-001', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 245 },
    { code: 'FS-S35-ST370S-002', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 255 },
    { code: 'FS-S35-C260S-003', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 505 },
    { code: 'FS-S35-C230P-004', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 290 },
    { code: 'FS-S35-C260P-005', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 305 },
    { code: 'FS-S35-C260S-006', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 315 },
    { code: 'FS-S35-C310P-007', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 330 },
    { code: 'FS-S35-C310S-008', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 330 },
    { code: 'FS-S35-CVC50-195P-009', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 250 },
    { code: 'FS-S35-CVC60-260S-010', type: 'Fitted Sheet', size: '3.5 ฟุต x 10 นิ้ว', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 315 },
    { code: 'FS-Q50-ST370P-011', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 290 },
    { code: 'FS-Q50-ST370S-012', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 300 },
    { code: 'FS-Q50-C260S-013', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 630 },
    { code: 'FS-Q50-C230P-014', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 370 },
    { code: 'FS-Q50-C260P-015', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 385 },
    { code: 'FS-Q50-C260S-016', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 395 },
    { code: 'FS-Q50-C310P-017', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 410 },
    { code: 'FS-Q50-C310S-018', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 415 },
    { code: 'FS-Q50-CVC50-195P-019', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 310 },
    { code: 'FS-Q50-CVC60-260S-020', type: 'Fitted Sheet', size: '5 ฟุต x 10 นิ้ว', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 395 },
    { code: 'FS-K60-ST370P-021', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 330 },
    { code: 'FS-K60-ST370S-022', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 340 },
    { code: 'FS-K60-C260S-023', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 675 },
    { code: 'FS-K60-C230P-024', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 390 },
    { code: 'FS-K60-C260P-025', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 445 },
    { code: 'FS-K60-C260S-026', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 455 },
    { code: 'FS-K60-C310P-027', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 470 },
    { code: 'FS-K60-C310S-028', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 485 },
    { code: 'FS-K60-CVC50-195P-029', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 365 },
    { code: 'FS-K60-CVC60-260S-030', type: 'Fitted Sheet', size: '6 ฟุต x 12 นิ้ว', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 454 },
    { code: 'FL-S35-ST370P-031', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 325 },
    { code: 'DC-K60-CVC60-260S-090', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 915 },
    { code: 'PC-STD-ST370P-091', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 50 },
    { code: 'PC-STD-ST370S-092', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 55 },
    { code: 'PC-STD-C260S-093', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 125 },
    { code: 'PC-STD-C230P-094', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 60 },
    { code: 'PC-STD-C260P-095', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 65 },
    { code: 'PC-STD-C260S-096', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 65 },
    { code: 'PC-STD-C310P-097', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 70 },
    { code: 'PC-STD-C310S-098', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 70 },
    { code: 'PC-STD-CVC50-195P-099', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 50 },
    { code: 'PC-STD-CVC60-260S-100', type: 'Pillow Case', size: '20"x30"x6"', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 65 },
    { code: 'FL-S35-ST370S-101', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 335 },
    { code: 'FL-S35-C260S-102', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 610 },
    { code: 'FL-S35-C230P-103', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 310 },
    { code: 'FL-S35-C260P-104', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 345 },
    { code: 'FL-S35-C260S-105', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 350 },
    { code: 'FL-S35-C310P-106', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 355 },
    { code: 'FL-S35-C310S-107', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 370 },
    { code: 'FL-S35-CVC50P-108', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 270 },
    { code: 'FL-S35-CVC60S-109', type: 'Flat Sheet', size: '72" x 110" (for 3.5 ft)', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 350 },
    { code: 'FL-Q50-ST370P-110', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 325 },
    { code: 'FL-Q50-ST370S-111', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 335 },
    { code: 'FL-Q50-C260S-112', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 775 },
    { code: 'FL-Q50-C230P-113', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 375 },
    { code: 'FL-Q50-C260P-114', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 420 },
    { code: 'FL-Q50-C260S-115', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 425 },
    { code: 'FL-Q50-C310P-116', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 435 },
    { code: 'FL-Q50-C310S-117', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 445 },
    { code: 'FL-Q50-CVC50P-118', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 325 },
    { code: 'FL-Q50-CVC60S-119', type: 'Flat Sheet', size: '90" x 110" (for 5 ft)', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 425 },
    { code: 'FL-K60-ST370P-120', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 395 },
    { code: 'FL-K60-ST370S-121', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 405 },
    { code: 'FL-K60-C260S-122', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 880 },
    { code: 'FL-K60-C230P-123', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 425 },
    { code: 'FL-K60-C260P-124', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 490 },
    { code: 'FL-K60-C260S-125', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 500 },
    { code: 'FL-K60-C310P-126', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 510 },
    { code: 'FL-K60-C310S-127', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 515 },
    { code: 'FL-K60-CVC50P-128', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 380 },
    { code: 'FL-K60-CVC60S-129', type: 'Flat Sheet', size: '110" x 110" (for 6 ft)', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 500 },
    { code: 'DC-S35-ST370P-130', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 435 },
    { code: 'DC-S35-ST370S-131', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 565 },
    { code: 'DC-S35-C260S-132', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 960 },
    { code: 'DC-S35-C230P-133', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 585 },
    { code: 'DC-S35-C260P-134', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 670 },
    { code: 'DC-S35-C260S-135', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 680 },
    { code: 'DC-S35-C310P-136', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 695 },
    { code: 'DC-S35-C310S-137', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 710 },
    { code: 'DC-S35-CVC50P-138', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 540 },
    { code: 'DC-S35-CVC60S-139', type: 'Duvet Cover', size: '70"x90" (for 3.5 ft)', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 680 },
    { code: 'DC-Q50-ST370P-140', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 575 },
    { code: 'DC-Q50-ST370S-141', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 695 },
    { code: 'DC-Q50-C260S-142', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 1180 },
    { code: 'DC-Q50-C230P-143', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 730 },
    { code: 'DC-Q50-C260P-144', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 835 },
    { code: 'DC-Q50-C260S-145', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 860 },
    { code: 'DC-Q50-C310P-146', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 870 },
    { code: 'DC-Q50-C310S-147', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 885 },
    { code: 'DC-Q50-CVC50P-148', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 675 },
    { code: 'DC-Q50-CVC60S-149', type: 'Duvet Cover', size: '90"x90" (for 5 ft)', fabric: 'CVC 60/40', spec: '260 Thread Count / 1" Striped Pattern', price: 860 },
    { code: 'DC-K60-ST370P-150', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Plain Pattern / White', price: 595 },
    { code: 'DC-K60-ST370S-151', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'Soft tex', spec: '370 Thread Count / Striped Pattern / White', price: 695 },
    { code: 'DC-K60-C260S-152', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 1295 },
    { code: 'DC-K60-C230P-153', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'Cotton 100%', spec: '230 Thread Count / Plain Pattern', price: 780 },
    { code: 'DC-K60-C260P-154', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / Plain Pattern', price: 895 },
    { code: 'DC-K60-C260S-155', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'Cotton 100%', spec: '260 Thread Count / 1" Striped Pattern', price: 915 },
    { code: 'DC-K60-C310P-156', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / Plain Pattern', price: 930 },
    { code: 'DC-K60-C310S-157', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'Cotton 100%', spec: '310 Thread Count / 1" Striped Pattern', price: 950 },
    { code: 'DC-K60-CVC50P-158', type: 'Duvet Cover', size: '100"x90" (for 6 ft)', fabric: 'CVC 50/50', spec: '195 Thread Count / Plain Pattern', price: 720 },
    // --- Towel Data ---
    { code: 'TWL-STD-12LBS-WHT-01', type: 'Towel', size: '27" x 54"', fabric: 'Cotton 100% Towel', spec: '12 lbs / Plain Pattern / White', price: 220 },
    { code: 'TWL-MED-14LBS-WHT-02', type: 'Towel', size: '27" x 54"', fabric: 'Cotton 100% Towel', spec: '14 lbs / Plain Pattern / White', price: 250 },
    { code: 'TWL-LRG-16LBS-WHT-03', type: 'Towel', size: '30" x 60"', fabric: 'Cotton 100% Towel', spec: '16 lbs / Plain Pattern / White', price: 280 },
    { code: 'TWL-LUX-18LBS-WHT-04', type: 'Towel', size: '30" x 60"', fabric: 'Cotton 100% Towel', spec: '18 lbs / Plain Pattern / White', price: 800 },
    // --- New Bolster Data ---
    { code: 'BC-C100-406S-01', type: 'Bolster Case', size: '14″ x 44″', fabric: 'Cotton 100%', spec: '406 Thread Count / Striped Pattern / White', price: 580 },
    { code: 'BC-CAD-500S-02', type: 'Bolster Case', size: '27″ x 40″', fabric: 'Anti-Dust Mite Cotton', spec: '500 Thread Count / Striped Pattern / White', price: 690 },
];

const MAPPINGS = {
    productType: { 'Fitted Sheet': { key: 'fittedSheet', th: 'ผ้าปูที่นอนรัดมุม', en: 'Fitted Sheet', zh: '床笠', ar: 'شرشف بمطاط', hi: 'फिटेड शीट' }, 'Flat Sheet': { key: 'flatSheet', th: 'ผ้าปูที่นอนไม่รัดมุม', en: 'Flat Sheet', zh: '床单', ar: 'شرشف عادي', hi: 'फ्लैट शीट' }, 'Duvet Cover': { key: 'duvetCover', th: 'ปลอกผ้านวม', en: 'Duvet Cover', zh: '被套', ar: 'غطاء لحاف', hi: 'डुवेट कवर' }, 'Pillow Case': { key: 'pillowCase', th: 'ปลอกหมอน', en: 'Pillow Case', zh: '枕套', ar: 'غطاء وسادة', hi: 'तकिया कवर' }, 'Bedding Set': { key: 'beddingSet', th: 'ชุดเครื่องนอน', en: 'Bedding Set', zh: '床上用品套装', ar: 'طقم مفروشات', hi: 'बिस्तर सेट' }, 'Towel': { key: 'towel', th: 'ผ้าขนหนู', en: 'Towel', zh: '毛巾', ar: 'منشفة', hi: 'तौलिया' }, 'Bolster Case': { key: 'bolsterCase', th: 'ปลอกหมอนข้าง', en: 'Bolster Case', zh: '长枕套', ar: 'غطاء وسادة أسطوانية', hi: 'बोलस्टर केस' } },
    fabricType: { 'Soft tex': { key: 'softTex', th: 'ซอฟท์เท็กซ์', en: 'Soft-Tex', zh: '软泰克斯', ar: 'سوفت تكس', hi: 'सॉफ्ट टेक्स' }, 'Cotton 100%': { key: 'cotton100', th: 'คอตตอน 100%', en: 'Cotton 100%', zh: '100%纯棉', ar: 'قطن 100%', hi: '100% कॉटन' }, 'CVC 50/50': { key: 'cvc50', th: 'CVC 50/50', en: 'CVC 50/50', zh: 'CVC 50/50', ar: 'CVC 50/50', hi: 'सीवीसी 50/50' }, 'CVC 60/40': { key: 'cvc60', th: 'CVC 60/40', en: 'CVC 60/40', zh: 'CVC 60/40', ar: 'CVC 60/40', hi: 'सीवीसी 60/40' }, 'Cotton 100% Towel': { key: 'cottonTowel', th: 'ผ้าขนหนูคอตตอน 100%', en: 'Cotton 100% Towel', zh: '100%纯棉毛巾', ar: 'منشفة قطن 100%', hi: '100% कॉटन तौलिया' }, 'Anti-Dust Mite Cotton': { key: 'cottonAntiDust', th: 'คอตตอน', en: 'Cotton', zh: '棉', ar: 'قطن', hi: 'कॉटन' } },
    size: { '3.5 ฟุต x 10 นิ้ว': { key: 's35_10', th: '3.5 ฟุต (สูง 10 นิ้ว)', en: '3.5 ft (10" depth)', zh: '3.5英尺 (10英寸高)', ar: '3.5 قدم (عمق 10 بوصة)', hi: '3.5 फुट (10" गहराई)' }, '5 ฟุต x 10 นิ้ว': { key: 'q50_10', th: '5 ฟุต (สูง 10 นิ้ว)', en: '5 ft (10" depth)', zh: '5英尺 (10英寸高)', ar: '5 قدم (عمق 10 بوصة)', hi: '5 फुट (10" गहराई)' }, '6 ฟุต x 12 นิ้ว': { key: 'k60_12', th: '6 ฟุต (สูง 12 นิ้ว)', en: '6 ft (12" depth)', zh: '6英尺 (12英寸高)', ar: '6 قدم (عمق 12 بوصة)', hi: '6 फुट (12" गहराई)' }, '72" x 110" (for 3.5 ft)': { key: 'flat_s35', th: '72"x110" (สำหรับ 3.5 ฟุต)', en: '72"x110" (for 3.5 ft)', zh: '72"x110" (适用3.5英尺)', ar: '72"x110" (لـ 3.5 قدم)', hi: '72"x110" (3.5 फुट के लिए)' }, '90" x 110" (for 5 ft)': { key: 'flat_q50', th: '90"x110" (สำหรับ 5 ฟุต)', en: '90"x110" (for 5 ft)', zh: '90"x110" (适用5英尺)', ar: '90"x110" (لـ 5 قدم)', hi: '90"x110" (5 फुट के लिए)' }, '110" x 110" (for 6 ft)': { key: 'flat_k60', th: '110"x110" (สำหรับ 6 ฟุต)', en: '110"x110" (for 6 ft)', zh: '110"x110" (适用6英尺)', ar: '110"x110" (لـ 6 قدم)', hi: '110"x110" (6 फुट के लिए)' }, '70"x90" (for 3.5 ft)': { key: 'duvet_s35', th: '70"x90" (สำหรับ 3.5 ฟุต)', en: '70"x90" (for 3.5 ft)', zh: '70"x90" (适用3.5英尺)', ar: '70"x90" (لـ 3.5 قدم)', hi: '70"x90" (3.5 फुट के लिए)' }, '90"x90" (for 5 ft)': { key: 'duvet_q50', th: '90"x90" (สำหรับ 5 ฟุต)', en: '90"x90" (for 5 ft)', zh: '90"x90" (适用5英尺)', ar: '90"x90" (لـ 5 قدم)', hi: '90"x90" (5 फुट के लिए)' }, '100"x90" (for 6 ft)': { key: 'duvet_k60', th: '100"x90" (สำหรับ 6 ฟุต)', en: '100"x90" (for 6 ft)', zh: '100"x90" (适用6英尺)', ar: '100"x90" (لـ 6 قدم)', hi: '100"x90" (6 फुट के लिए)' }, '20"x30"x6"': { key: 'pillow_std', th: 'ปลอกหมอนมาตรฐาน', en: 'Standard Pillowcase', zh: '标准枕套', ar: 'غطاء وسادة قياسي', hi: 'मानक तकिया कवर' }, '27" x 54"': { key: 'towel_std', th: '27" x 54"', en: '27" x 54"', zh: '27" x 54"', ar: '27" x 54"', hi: '27" x 54"' }, '30" x 60"': { key: 'towel_large', th: '30" x 60"', en: '30" x 60"', zh: '30" x 60"', ar: '30" x 60"', hi: '30" x 60"' }, '14″ x 44″': { key: 'bolster_14x44', th: '14″ x 44″', en: '14″ x 44″', zh: '14″ x 44″', ar: '14″ × 44″', hi: '14″ x 44″' }, '27″ x 40″': { key: 'bolster_27x40', th: '27″ x 40″', en: '27″ x 40″', zh: '27″ x 40″', ar: '27″ × 40″', hi: '27″ x 40″' } },
    pattern: { 'Plain': { key: 'plain', th: 'สีพื้น', en: 'Plain', zh: '纯色', ar: 'سادة', hi: 'सादा' }, 'Striped': { key: 'striped', th: 'ลายริ้ว', en: 'Striped', zh: '条纹', ar: 'مخطط', hi: 'धारीदार' } },
    color: { 'White': { key: 'white', th: 'สีขาว', en: 'White', zh: '白色', ar: 'أبيض', hi: 'सफ़ेद' } }
};


// --- BUSINESS LOGIC ---

export const products: Product[] = rawProductData.map(item => {
 const type=MAPPINGS.productType[item.type as keyof typeof MAPPINGS.productType];
 const fabric=MAPPINGS.fabricType[item.fabric as keyof typeof MAPPINGS.fabricType];
 const pattern=MAPPINGS.pattern[item.spec.toLowerCase().includes('stripe')?'Striped':'Plain'];
 const imageUrl=getDeterministicImage(item.type==='Towel'?'towel':item.type==='Bolster Case'?'bolster':pattern.key==='striped'?'white_striped':'white_plain', item.code);
 return {id:item.code,name:type,productType:type,fabricType:fabric,size:MAPPINGS.size[item.size as keyof typeof MAPPINGS.size],pattern,color:MAPPINGS.color.White,price:item.price,threadCount:0,description:type,imageUrl};
});
