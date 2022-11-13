import React, { useContext, useState, useEffect } from "react";
import PostCard from "./postCard";
import defaultDp from "../../vendors/images/user.png";
import { RouteName } from "../../../RouteName";
import AuthContext from "../../../context/AuthProvider";
import { ArticleService } from "../../../services/ArticleService"
const Index: React.FC = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [posts, setPosts] = useState<any>()

  useEffect(() => {
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 1500);
    ArticleService.getAllMyArticles().then((res) => {
      // console.log(res)
      // console.log(res.data)
      if (res.data) {
        // console.log("post List ==>", res.data);
        setPosts(res.data)
      } else {
        console.log("error");
      }
    });
  }, []);
  console.log(posts?.posts)
  return (
    <React.Fragment>
      <div className="container-lg h-full">
        <div className="row">
          <div className="col-12 col-sm-12 col-lg-8 col-md-8 order-2 order-sm-2 order-md-1 order-lg-1">
            <div className="d-flex justify-content-center">
              <div className="mt-2 mb-4">
                {posts?.posts?.map((post: any, index: number) => {
                  return <PostCard index={index} post={post} key={index} />;
                })}
                {/* <div className="p-2 mb-4">
                  <PostCard />
                </div>
                <div className="p-2 mb-4">
                  <PostCard />
                </div>
                <div className="p-2 mb-4">
                  <PostCard />
                </div>
                <div className="p-2 mb-4">
                  <PostCard />
                </div>
                <div className="p-2 mb-4">
                  <PostCard />
                </div>
                <div className="p-2 mb-4">
                  <PostCard />
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-lg-4 col-md-4 order-1 order-sm-1 order-md-2 order-lg-2">
            <div className="me-4 ms-4 d-flex justify-content-center">
              <a href={RouteName.CREATE_ARTICLE} className="btn btn-primary mt-4 w-full mb-1">Create Article</a>
            </div>
            <div className="me-4 ms-4 d-flex justify-content-center">
              <a href={RouteName.UPLOAD_LIBRARY} className="btn btn-success mt-2 w-full mb-1">Upload To Library</a>
            </div>
            <div className="me-4 ms-4 d-flex justify-content-center">
              <a href={RouteName.CREATE_LESSONS} className="btn btn-info mt-2 w-full mb-3">Create Lessons</a>
            </div>
            <hr />
            <h5 className="mt-4 mb-4 text-primary fs-22">Top Users</h5>
            <div className="me-4 ms-4 d-flex justify-content-left ">

              <div className="w-50">
                <div className="dp-card mt-4">
                  <img className="dp-icon" src={defaultDp} alt="Dp" />
                  <div className="mt-1">
                    <h6 className="text-info font-13">James warn </h6>
                    <p className="text-info  font-11">
                      rathnayakagavindu98@gmai.com
                    </p>
                  </div>
                </div>
                <div className="dp-card mt-4">
                  <img className="dp-icon" src={defaultDp} alt="Dp" />
                  <div className="mt-1">
                    <h6 className="text-info font-13">James warn </h6>
                    <p className="text-info  font-11">
                      rathnayakagavindu98@gmai.com
                    </p>
                  </div>
                </div>

                <div className="dp-card mt-4">
                  <img className="dp-icon" src={defaultDp} alt="Dp" />
                  <div className="mt-1">
                    <h6 className="text-info font-13">James warn </h6>
                    <p className="text-info  font-11">
                      rathnayakagavindu98@gmai.com
                    </p>
                  </div>
                </div>
                <div className="dp-card mt-4">
                  <img className="dp-icon" src={defaultDp} alt="Dp" />
                  <div className="mt-1">
                    <h6 className="text-info font-13">James warn </h6>
                    <p className="text-info  font-11">
                      rathnayakagavindu98@gmai.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
