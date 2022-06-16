import styles from './store-feature-game-detail.module.scss';

/* eslint-disable-next-line */
export interface StoreFeatureGameDetailProps {}

export function StoreFeatureGameDetail(props: StoreFeatureGameDetailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StoreFeatureGameDetail!</h1>
    </div>
  );
}

export default StoreFeatureGameDetail;
