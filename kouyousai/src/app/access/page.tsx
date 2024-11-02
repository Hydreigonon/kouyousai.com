import { Typography, Box } from "@mui/material";

export default function Access() {

  return (
    <>
    <h1 className="pageTitle">
        アクセス
    </h1>
    <Box>
    <Box sx={{display: 'flex', justifyContent: 'center',  mt: 10, td: 5}} dangerouslySetInnerHTML={{__html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.1292924971826!2d137.14636971238872!3d35.10348227266583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60035ff6c15d45cf%3A0xd87866e720aee934!2z6LGK55Sw5bel5qWt6auY562J5bCC6ZaA5a2m5qCh!5e0!3m2!1sja!2sjp!4v1730524962837!5m2!1sja!2sjp" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}} />
    </Box>
    <Box sx={{ mt: 10, md: 5 }}>
        <Typography variant="h5" align="center" color="green" sx={{ ml: 2, mr: 2, mt: 5 }} >各駅ｰ豊田高専</Typography>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
            <Box component="img" src="/access_images/route_map.png" alt="豊田高専への路線図" />
        </Box>
    </Box>
    <Box sx={{ mt: 10, md: 5 }}>
        <Typography variant="h5" align="center" color="green" sx={{ ml: 2, mr: 2, mt: 5 }} >名鉄梅坪駅・愛環梅坪駅ｰ豊田高専</Typography>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
            <Box component="img" src="/access_images/meitetsu_map.png" alt="名鉄梅坪駅・愛環梅坪駅ｰ豊田高専の地図" />
        </Box>
    </Box>
    <Box sx={{ display: "flex", justifyContent: 'center' }}>
        <Box>
            <Typography variant="h5" align="center" color="green" sx={{ ml: 2, mr: 2, mt: 5 }} >豊田市駅・新豊田駅ｰ豊田高専</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                <Box component="img" src="/access_images/shintoyota_map.png" alt="豊田市駅・新豊田駅ｰ豊田高専の地図" />
            </Box>
        </Box>
        <Box>
            <Typography variant="h5" align="center" color="green" sx={{ ml: 2, mr: 2, mt: 5 }} >上豊田駅ｰ豊田高専</Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                <Box component="img" src="/access_images/kamitoyota_map.png" alt="上豊田駅ｰ豊田高専の地図" />
            </Box>
        </Box>
    </Box>
    </>
  );
}
