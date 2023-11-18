// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const id = req.query.id
    
    var headers = new Headers();
      //headers.append("Content-Type", "application/json");
      headers.append("User-Agent", "bugUwUPersonalWebsite/1.0.3 (https://qwq.lgbt)");
      headers.append("Origin", "https://qwq.lgbt/");
      headers.append("Referer", "https://qwq.lgbt/");

    const response = await fetch(`https://neteasemusic.api.nekocafe.moe/song/url/v1?id=${id}&level=higher`, {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
      });
      
    const resData = await response.json();
    console.log(resData);
    if (resData.data[0].url == null) {
        res.status(500).json({ code: 500, msg: 'Cannot fetch music url.' })
        return;
    }
    res.redirect(resData.data[0].url);
}
