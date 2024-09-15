import type { CleaningItems } from "./calculateEstimate";

const bedroom_cost = 17;
const bathroom_cost = 19;
const windows_cost = 5;
const oven_cost = 18;
const microwave_cost = 10;
const baseboard_cost = 0.04;
const basement_cost = 75;
const kitchen_cab_cost = 40;
const bathroom_cab_cost = 30;
const change_linens_cost = 5;
const pet_charge_cost = 25;
const refrigerator_cost = 40;

export const TAXES = 0.06;

export const prices = {
  bedroom_cost,
  bathroom_cost,
  windows_cost,
  oven_cost,
  microwave_cost,
  baseboard_cost,
  basement_cost,
  kitchen_cab_cost,
  bathroom_cab_cost,
  change_linens_cost,
  pet_charge_cost,
  refrigerator_cost,
};

export const base_service_cost_ranges: Record<NonNullable<CleaningItems["square_feet"]>, number> = {
  0: 110, // 0+ sqft
  1101: 125, // 1100+ sqft
  1501: 135, // 1500+ sqft
  2001: 145, // 2000+ sqft
  2501: 155, // 2500+ sqft
  3001: 200, // default
};

export const service_type_charges: Record<NonNullable<CleaningItems["package_type"]>, number> = {
  standard: 0, // 0% charge
  detailed: 0.5, // 50% charge
  luxury: 0.5, // 50% charge
};

export const service_frequency_discounts: Record<NonNullable<CleaningItems["service_frequency"]>, number> = {
  one_time: 0,
  weekly: 0.2, // 20% discount
  biweekly: 0.1, // 10% discount
  monthly: 0.1, // 10% discount
};