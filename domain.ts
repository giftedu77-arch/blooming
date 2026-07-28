export type TrashType = 'plastic' | 'can' | 'glass' | 'vinyl' | 'styrofoam' | 'fishing_net' | 'general';
export type User = { id: string; nickname: string; points: number; rank: number; level: number };
export type Certification = { id: string; userId: string; videoUrl: string; location: { latitude: number; longitude: number }; timestamp: string; trashType: TrashType; points: number; status: 'approved' | 'pending' };
export type Reward = { id: string; name: string; description: string; requiredPoints: number; icon: string };
