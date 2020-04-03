using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Model;

namespace SSMiniProgram.Controllers
{
    [Route("[controller]")]
    public class ClassicController : Controller
    {
        //public IActionResult Index()
        //{

        //}


        [HttpGet]
        public Lates Get()
        {
            return new Lates
            {
                content = "人生不能像做菜，把所有的料准备好才下锅",
                fav_nums = 100,
                id = 1,
                image = "http://127.0.0.1:5000/images/movie_7.png",
                index = 7,
                like_status = 0,
                pubdate = "2018-06-22",
                title = "李安<<饮食男女>>",
                type = 100
            };

        }
    }
}