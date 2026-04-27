import { createClient } from "jsr:@supabase/supabase-js@2.49.8";

// ─── Types ────────────────────────────────────────────────────────────────────
export type Role = "admin" | "coordinator" | "viewer";
export type Unit = "Himig" | "Teatro" | "Katha" | "Ritmo" | "Likha";
export type ProfileStatus = "active" | "inactive" | "pending";
export type MembershipStatus = "pending" | "approved" | "rejected";

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  unit: Unit | null;
  role: Role;
  status: ProfileStatus;
  created_at: string;
}

export interface MembershipRequest {
  id: string;
  user_id: string;
  user_name?: string;
  user_email?: string;
  unit: Unit;
  status: MembershipStatus;
  created_at: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  unit: Unit | null;
  created_by: string;
  created_by_name?: string;
  created_at: string;
  updated_at?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
export const VALID_UNITS: Unit[] = ["Himig", "Teatro", "Katha", "Ritmo", "Likha"];
export const VALID_ROLES: Role[] = ["admin", "coordinator", "viewer"];

// ─── Supabase client (service role) ──────────────────────────────────────────
export const getServiceClient = () =>
  createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

// ─── Auth helper ─────────────────────────────────────────────────────────────
export async function getAuthUser(authHeader: string | null | undefined) {
  if (!authHeader?.startsWith("Bearer ")) return null;
  const token = authHeader.slice(7);
  try {
    const supabase = getServiceClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);
    if (error || !user) return null;
    return user;
  } catch {
    return null;
  }
}

// ─── DB helpers ──────────────────────────────────────────────────────────────
export async function getProfile(userId: string): Promise<Profile | null> {
  const supabase = getServiceClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data as Profile | null;
}

export async function getAllProfiles(): Promise<Profile[]> {
  const supabase = getServiceClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data as Profile[];
}

export async function getUnitProfiles(unit: string): Promise<Profile[]> {
  const supabase = getServiceClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("unit", unit)
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data as Profile[];
}

export async function upsertProfile(profile: Profile): Promise<Profile> {
  const supabase = getServiceClient();
  const { data, error } = await supabase
    .from("profiles")
    .upsert(profile)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data as Profile;
}

export async function updateProfileFields(
  userId: string,
  fields: Partial<Pick<Profile, "full_name" | "unit" | "role" | "status">>
): Promise<Profile> {
  const supabase = getServiceClient();
  const { data, error } = await supabase
    .from("profiles")
    .update(fields)
    .eq("id", userId)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data as Profile;
}

export async function getMembershipRequest(id: string): Promise<MembershipRequest | null> {
  const supabase = getServiceClient();
  const { data, error } = await supabase
    .from("membership_requests")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data as MembershipRequest | null;
}

export async function getAllMembershipRequests(): Promise<MembershipRequest[]> {
  const supabase = getServiceClient();
  const { data, error } = await supabase
    .from("membership_requests")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data as MembershipRequest[];
}

export async function createMembershipRequest(request: Omit<MembershipRequest, "created_at">): Promise<MembershipRequest> {
  const supabase = getServiceClient();
  const { data, error } = await supabase
    .from("membership_requests")
    .insert(request)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data as MembershipRequest;
}

export async function updateMembershipRequestStatus(
  id: string,
  status: MembershipStatus
): Promise<MembershipRequest> {
  const supabase = getServiceClient();
  const { data, error } = await supabase
    .from("membership_requests")
    .update({ status })
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data as MembershipRequest;
}

export async function getAnnouncement(id: string): Promise<Announcement | null> {
  const supabase = getServiceClient();
  const { data, error } = await supabase
    .from("announcements")
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return data as Announcement | null;
}

export async function getAllAnnouncements(): Promise<Announcement[]> {
  const supabase = getServiceClient();
  const { data, error } = await supabase
    .from("announcements")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data as Announcement[];
}

export async function createAnnouncement(announcement: Omit<Announcement, "created_at">): Promise<Announcement> {
  const supabase = getServiceClient();
  const { data, error } = await supabase
    .from("announcements")
    .insert(announcement)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data as Announcement;
}

export async function updateAnnouncement(
  id: string,
  fields: Pick<Announcement, "title" | "content"> & { updated_at: string }
): Promise<Announcement> {
  const supabase = getServiceClient();
  const { data, error } = await supabase
    .from("announcements")
    .update(fields)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data as Announcement;
}

export async function deleteAnnouncement(id: string): Promise<void> {
  const supabase = getServiceClient();
  const { error } = await supabase
    .from("announcements")
    .delete()
    .eq("id", id);
  if (error) throw new Error(error.message);
}

// ─── Response helpers ─────────────────────────────────────────────────────────
export const unauthorized = (msg = "Unauthorized: Invalid or missing token") =>
  Response.json({ error: msg }, { status: 401 });

export const forbidden = (msg = "Forbidden: Insufficient permissions") =>
  Response.json({ error: msg }, { status: 403 });

export const badRequest = (msg: string) =>
  Response.json({ error: msg }, { status: 400 });

export const notFound = (msg: string) =>
  Response.json({ error: msg }, { status: 404 });

export const serverError = (msg: string, detail?: unknown) => {
  console.log(`Server error: ${msg}`, detail);
  return Response.json({ error: msg }, { status: 500 });
};
