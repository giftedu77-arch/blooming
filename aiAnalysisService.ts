import { TrashType } from '@/types/domain';
const choices: TrashType[] = ['plastic', 'can', 'glass', 'vinyl', 'styrofoam', 'fishing_net'];
export async function analyzeTrashVideo(_uri: string): Promise<{ trashType: TrashType; confidence: number }> {
  await new Promise(resolve => setTimeout(resolve, 1400));
  return { trashType: choices[Math.floor(Math.random() * choices.length)], confidence: 0.86 + Math.random() * 0.12 };
}
export const labels: Record<TrashType, string> = { plastic:'플라스틱', can:'캔', glass:'유리', vinyl:'비닐', styrofoam:'기타 쓰레기', fishing_net:'기타 쓰레기', general:'일반 쓰레기' };
export const rewards: Record<TrashType, number> = { plastic:300, can:500, glass:500, vinyl:300, styrofoam:500, fishing_net:500, general:100 };
export const calculateReward = (type: TrashType) => rewards[type];
