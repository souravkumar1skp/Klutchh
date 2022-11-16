import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
// import data from './129859.json';
import data1 from './dataa.json';
import data2 from './dataa2.json';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function RowCard() {
  return (
    <>
    <div className="teams">
        <div className="player">
        {data1.map((page) => (
                <Card row variant="outlined" sx={{ width: 260, bgcolor: 'background.body' }}>
                <CardOverflow>
                  <AspectRatio ratio="1" sx={{ width: 90 }}>
                    <img
                      src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                      srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                </CardOverflow>
                <CardContent sx={{ px: 2 }}>
                  <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
                    {page.name}
                  </Typography>
                  <Typography level="body2">Credit : {page.credit}</Typography>
                </CardContent>
                <Divider />
                <CardOverflow
                  variant="soft"
                  color="primary"
                  sx={{
                    px: 0.2,
                    writingMode: 'vertical-rl',
                    textAlign: 'center',
                    fontSize: 'xs2',
                    fontWeight: 'xl2',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  Ticket
                </CardOverflow>
              </Card>
              ))}
            </div>



        <div>{data2.map((page) => (
                <Card row variant="outlined" sx={{ width: 260, bgcolor: 'background.body' }}>
                <CardOverflow>
                  <AspectRatio ratio="1" sx={{ width: 90 }}>
                    {page.image_url== null ? <img
                      src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                      srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                      loading="lazy"
                      alt=""
                    />:
                    <img
                      src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                      srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                      loading="lazy"
                      alt=""
                    />}
                  </AspectRatio>
                </CardOverflow>
                <CardContent sx={{ px: 2 }}>
                  <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
                    {page.name}
                  </Typography>
                  <Typography level="body2">Credit: {page.credit}</Typography>
                </CardContent>
                <Divider />
                <CardOverflow
                  variant="soft"
                  color="primary"
                  sx={{
                    px: 0.2,
                    writingMode: 'vertical-rl',
                    textAlign: 'center',
                    fontSize: 'xs2',
                    fontWeight: 'xl2',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}
                >
                  Ticket
                </CardOverflow>
              </Card>
              ))}</div> 

    </div>
    <Stack direction="row" spacing={2}>
    <Button variant="contained" color="success">
      Preview Selection
    </Button>
  </Stack>
  </>
  );
}