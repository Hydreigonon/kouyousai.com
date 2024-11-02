import * as React from 'react';
import { Typography, Box, Button } from "@mui/material";


export default function ForVisitors() {

  return (
    <>
      <div>
        <h1 className="pageTitle">
          ご来場の方へ
        </h1>
        </div>
        <Button href="https://docs.google.com/forms/d/e/1FAIpQLSclS3SjZUgeQFeNDL5W15bJ81KdWNSJPE5fPq-XiFQpBSmMpA/viewform" sx={{ display: 'flex', mx: 5, mt: 5, px: 2, pb: 10, border: '1px solid black', borderRadius: '8px' }}>
            <Box>
                <Typography variant="h4" align="center" color="red" sx={{ ml: 2, mr: 2, mt: 5, mb: 3 }} >こうよう祭へご来場予定の方へ</Typography>
                <Typography variant="h5" color="black">こちらをクリックして必ず事前登録フォームの回答をお願いします</Typography>
            </Box>
        </Button>
        <Box sx={{ mx: 5, mt: 5, px: 2, pb: 10 }}>
            <Typography variant="h3" align="center" color="red" sx={{ ml: 2, mr: 2, mt: 5, mb: 3 }} >【お願い】</Typography>
            <Typography variant="h5" align="center" color="black"  sx={{ ml: 5, mr: 5 }}>車でもご来場いただけますが、駐車場には限りがあります。</Typography>
            <Typography variant="h5" align="center" color="black" sx={{ ml: 5, mr: 5 }}>できる限り公共交通機関でお越しいただきますようにお願いします。</Typography>
        </Box>
    </>
  );
}
