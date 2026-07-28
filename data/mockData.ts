import { Reward, User } from '@/types/domain';
export const currentUser: User = { id:'me', nickname:'바다지킴이', points:2450, rank:3, level:3 };
export const leaderboard = [{ name:'김해OO', points:5420 }, { name:'박지O', points:4850 }, { name:'바다지킴이', points:2450 }];
export const storeRewards: Reward[] = [
  { id:'1', name:'구글 플레이스토어 게임 할인팩', description:'인기 게임 할인 혜택을 받아보세요', requiredPoints:3000, icon:'🎮' },
  { id:'2', name:'올리브영 5천원권', description:'올리브영에서 사용할 수 있는 모바일 상품권', requiredPoints:5000, icon:'🛍️' },
  { id:'3', name:'메가커피 할인권', description:'메가커피 음료 할인 혜택', requiredPoints:1000, icon:'☕' },
  { id:'4', name:'CU 기프티콘', description:'CU 편의점에서 사용할 수 있는 모바일 쿠폰', requiredPoints:7000, icon:'🏪' }
];
