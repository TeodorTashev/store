// Utility function to extract product name and price from filename
// Returns Euro price as the base currency
export const parseProductInfo = (filename, category = null) => {
    // Remove file extension
    const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
    
    // Extract price - looks for numbers followed by "лв"
    const priceMatch = nameWithoutExt.match(/(\d+)лв/);
    const levPrice = priceMatch ? parseInt(priceMatch[1]) : 0;
    
    // Convert Lev to Euro (Euro is now the base currency)
    const euroPrice = convertLevToEuro(levPrice, category);
    
    // Extract product name - everything after the price
    let name = nameWithoutExt;
    if (priceMatch) {
        // Remove the number and "лв" from the name
        name = nameWithoutExt.replace(/\d+лв/, "").trim();
        
        // Remove the initial number and "тениска" if present
        name = name.replace(/^\d+\s*тениска\s*/, "").trim();
        
        // Remove the initial number and "суитшърт" if present
        name = name.replace(/^\d+\s*суитшърт\s*/, "").trim();
    }
    
    return {
        name: name || "Продукт",
        price: euroPrice  // Return Euro price as base currency
    };
};

// Utility function for safe number conversion
const toNumberSafe = (value) => {
    const n = typeof value === 'number' ? value : Number(value);
    return Number.isFinite(n) ? n : 0;
};

// Exchange rate: 1 EUR = 1.95583 BGN (fixed rate)
const EXCHANGE_RATE = 1.95583;

// Price mapping: Lev to Euro (used to convert old Lev prices from filenames to Euro)
// Format: { category: { lev: euro } }
const levToEuroMapping = {
    'tshirts': {
        40: 25,  // Тениски: 40лв -> 25€
        45: 28   // Тениски: 45лв -> 28€
    },
    'polo': {
        60: 35,  // Поло тениски: 60лв -> 35€
        65: 40   // Поло тениски: 65лв -> 40€
    },
    'kids': {
        35: 20,  // Детски тениски: 35лв -> 20€
        40: 23   // Детски тениски/поло: 40лв -> 23€
    },
    'sweatshirts': {
        75: 40,  // Суитшърта: 75лв -> 40€
        80: 43,  // Суитшърта: 80лв -> 43€
        85: 45   // Суитшърта: 85лв -> 45€
    },
    'accessories': {
        10: 7    // Скрънчи: 10лв -> 7€
    }
};

// Convert Lev price from filename to Euro price
export const convertLevToEuro = (levPrice, category = null) => {
    const lev = toNumberSafe(levPrice);
    
    // Try category-specific mapping first
    if (category && levToEuroMapping[category] && levToEuroMapping[category][lev] !== undefined) {
        const euro = levToEuroMapping[category][lev];
        if (euro !== null) {
            return euro;
        }
    }
    
    // Fallback: try all categories
    for (const cat in levToEuroMapping) {
        if (levToEuroMapping[cat][lev] !== undefined && levToEuroMapping[cat][lev] !== null) {
            return levToEuroMapping[cat][lev];
        }
    }
    
    // Final fallback to exchange rate calculation
    return lev / EXCHANGE_RATE;
};

// Convert Euro to Lev (Euro is the base currency now)
export const convertEuroToLev = (euroPrice) => {
    const euro = toNumberSafe(euroPrice);
    return euro * EXCHANGE_RATE;
};

// Utility function to format price in Euro only
export const formatPrice = (euroPrice) => {
    const euro = toNumberSafe(euroPrice);
    return `${euro.toFixed(2)} €`;
};