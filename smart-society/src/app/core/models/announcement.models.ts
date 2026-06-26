export interface AnnouncementResponse {
  id: string;
  title: string;
  content: string;
  isPinned: boolean;
  audience: 'Admin' | 'Owner' | 'Resident' | 'SecurityStaff';
  createdAt: string;
}

export interface CreateAnnouncement {
  title: string;
  content: string;
  isPinned: boolean;
  audience: string;
}