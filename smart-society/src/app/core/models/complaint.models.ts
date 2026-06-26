export interface ComplaintResponse {
  id: string;
  userId: string;
  userName: string;
  title: string;
  description: string;
  status: 'Open' | 'Resolved';
  resolution?: string;
  createdAt: string;
  resolvedAt?: string;
}

export interface CreateComplaint {
  title: string;
  description: string;
}

export interface ResolveComplaint {
  resolution: string;
}