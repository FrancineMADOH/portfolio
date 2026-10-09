import { CaseStudy, ProjectSlug } from '../models';
import { BRIGHTWILL } from './brightwill';
import { CHRIST_INTERNATIONAL_GROUP } from './christ-international-group';
import { MUNGOUM } from './mungoum';
import { NOMORESILENT } from './nomoresilent';

/** Une entrée par slug : le compilateur signale un projet oublié ou en double. */
export const PROJECTS: Record<ProjectSlug, CaseStudy> = {
  'christ-international-group': CHRIST_INTERNATIONAL_GROUP,
  'brightwill': BRIGHTWILL,
  'nomoresilent': NOMORESILENT,
  'mungoum': MUNGOUM
};

export const PROJECT_SLUGS = Object.keys(PROJECTS) as ProjectSlug[];

export function findProject(slug: string): CaseStudy | undefined {
  return (PROJECT_SLUGS as string[]).includes(slug) ? PROJECTS[slug as ProjectSlug] : undefined;
}
