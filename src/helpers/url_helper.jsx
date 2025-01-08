//LOGIN
export const POST_FAKE_LOGIN = "/post-fake-login";
export const POST_FAKE_JWT_LOGIN = "/post-jwt-login";
export const POST_FAKE_PASSWORD_FORGET = "/fake-forget-pwd";
export const POST_FAKE_JWT_PASSWORD_FORGET = "/jwt-forget-pwd";
export const SOCIAL_LOGIN = "/social-login";

// API ENDPOINTS =====================================================>

export const LOGIN = "/auth/login";
export const WORKERS = "/auth/createUser";
export const ALL_USERS = "/users";
export const SALES_REGISTER_PETROL = "/petrol";
export const SALES_REGISTER_DIESEL = "/diesel";
export const SALES_REGISTER_POWER = "/powerPetrol";
export const SALES_REGISTER_TURBO = "/turboDiesel";

//ADD SHIFTS
export const SHIFTS = "/shift-details";

//ADD TANKS
export const ADD_TANKS = "/tank-details";
export const TANK_DETAILS = "/tank-details/stock";

//PUMP DETAILS
export const PUMP_DETAILS = "/pump-details";

//ORDERS
export const ORDERS = '/order';

//ADD CATEGORIES
export const ADD_CATEGORIES = "/category";

//PUMP READING
export const PUMP_READING = "/pump-reading";

//Fuel Price
export const FUEL_PRICE = "/fuelPrice";

//Tank Entry
export const TANK_ENTRY = "/tank-entry";

//Density
export const PETROL_DENSITY = "/density/petrol";
export const DIESEL_DENSITY = "/density/diesel";
export const POWER_PETROL_DENSITY = "/density/powerPetrol";
export const TURBO_DIESEL_DENSITY = "/density/turboDiesel";

//Tank Density
export const TANK_DENSITY_PETROL = "/tank-density/petrol";
export const TANK_DENSITY_DIESEL = "/tank-density/diesel";
export const TANK_DENSITY_POWER_PETROL = "/tank-density/powerPetrol";
export const TANK_DENSITY_TURBO_DIESEL = "/tank-density/turboDiesel";

//Dip Readings
export const PETROL_DIP_READINGS = "/dip-readings/petrol";
export const DIESEL_DIP_READINGS = "/dip-readings/diesel";
export const POWER_DIP_READINGS = "/dip-readings/powerPetrol";
export const TURBO_DIP_READINGS = "/dip-readings/turboDiesel";

//Tank Dip
export const PETROL_TANK_DIP = "/tank-dip/petrol";
export const DIESEL_TANK_DIP = "/tank-dip/diesel";
export const POWER_TANK_DIP = "/tank-dip/powerPetrol";
export const TURBO_TANK_DIP = "/tank-dip/turboDiesel";

//All Density
export const ALL_DENSITY_PETROL = "/density/petrol/all-with-tank-density";
export const ALL_DENSITY_DIESEL = "/density/diesel/all-with-tank-density";
export const ALL_DENSITY_POWER_PETROL = "/density/powerPetrol/all-with-tank-density";
export const ALL_DENSITY_TURBO_DIESEL = "/density/turboDiesel/all-with-tank-density";

//All Dip Reading
export const ALL_DIP_PETROL = "/dip-readings/petrol/all-with-tank-dip";
export const ALL_DIP_DIESEL = "/dip-readings/diesel/all-with-tank-dip";
export const ALL_DIP_POWER_PETROL = "/dip-readings/powerPetrol/all-with-tank-dip";
export const ALL_DIP_TURBO_DIESEL = "/dip-readings/turboDiesel/all-with-tank-dip";

// attendance history
export const ATTENDANCE_HISTORY = '/attendance/all-attendance';

// delivery
export const DELIVERY = '/delivery';

// Payments
export const ONLINE_PAYMENTS = '/onlinePayment';
export const EXPENSES = '/expanse';

//sales history
export const SALES_HISTORY = '/order';

//partner flow
export const GET_PARTNERS = '/users/partners';
export const CREDIT_PAYMENTS = '/creditPayments/partner';
export const CREDIT_PAYMENTS_BY_ID = '/creditPayments';
export const BILL_REQUEST = '/billRequest';