import { getAllGames } from '../fake-api';

import styles from './app.module.scss';

import { Header } from '@nx-demo/store/ui-shared';
import { formatRating } from '@nx-demo/store/util-formatters';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { StoreFeatureGameDetail } from '@nx-demo/store/feature-game-detail';

export const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className={styles['container']}>
        <div className={styles['gamesLayout']}>
          {getAllGames().map((x) => (
            <Card
              key={x.id}
              className={styles['gameCard']}
              onClick={() => navigate(`/game/${x.id}`)}
            >
              <CardActionArea>
                <CardMedia
                  className={styles['gameCardMedia']}
                  image={x.image}
                  title={x.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {x.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {x.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={styles['gameRating']}
                  >
                    <strong>Rating:</strong> {formatRating(x.rating)}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
      </div>
      <Routes>
        <Route path="/game/:id" element={<StoreFeatureGameDetail />} />
      </Routes>
    </>
  );
};

export default App;
