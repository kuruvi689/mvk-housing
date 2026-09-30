import { Composio } from "@composio/core";

const ENQUIRY_SPREADSHEET_ID = "15QQpETCD23j7YFS6Kxeng1ErE8hc1fATUACN6AMVN10";

let composio: Composio | null = null;

function getComposio(): Composio {
  if (!process.env.MVK_COMPOSIO_API_KEY) {
    throw new Error("MVK_COMPOSIO_API_KEY is not set — see .env.example");
  }
  if (!composio) {
    composio = new Composio({ apiKey: process.env.MVK_COMPOSIO_API_KEY });
  }
  return composio;
}

async function appendRow(range: string, row: (string | number)[]): Promise<void> {
  await getComposio().tools.execute("GOOGLESHEETS_SPREADSHEETS_VALUES_APPEND", {
    userId: "default",
    dangerouslySkipVersionCheck: true,
    arguments: {
      spreadsheetId: ENQUIRY_SPREADSHEET_ID,
      range,
      valueInputOption: "USER_ENTERED",
      values: [row],
    },
  });
}

export interface BuyerEnquiry {
  name: string;
  phone: string;
  location: string;
  budget: string;
  needType: string;
  expectations: string;
}

export interface SellerEnquiry {
  name: string;
  address: string;
  phone: string;
  location: string;
  configuration: string;
  area: string;
  furnishing: string;
}

export async function appendBuyerEnquiry(enquiry: BuyerEnquiry): Promise<void> {
  await appendRow("Buyer Enquiries!A:G", [
    new Date().toISOString(),
    enquiry.name,
    enquiry.phone,
    enquiry.location,
    enquiry.budget,
    enquiry.needType,
    enquiry.expectations,
  ]);
}

export async function appendSellerEnquiry(enquiry: SellerEnquiry): Promise<void> {
  await appendRow("Seller Enquiries!A:H", [
    new Date().toISOString(),
    enquiry.name,
    enquiry.address,
    enquiry.phone,
    enquiry.location,
    enquiry.configuration,
    enquiry.area,
    enquiry.furnishing,
  ]);
}
