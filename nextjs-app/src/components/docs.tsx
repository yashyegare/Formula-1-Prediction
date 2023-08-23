import {ReactNode} from "react";

type Props = {
    children: ReactNode
}

const HeadingCaption = ({ children }: Props) => {
    return (
        <p className="text-xl opacity-60 m-0">{children}</p>
    )
}

const Container = ({ children }: Props) => {
    return (
        <section className="flex flex-col items-start gap-4 mb-8">
            {children}
        </section>
    )
}
const Docs = () => {
    return (
        <>
            <header>
                <h1 className="page-title">Predicting Formula 1 Race Results</h1>
                <HeadingCaption>A Machine Learning approach to predict race results</HeadingCaption>
                <p className="page-description" />
            </header>
            <Container>
                <h3 className="text-xl font-medium">Developed By:</h3>
                <section className="flex flex-col md:flex-row gap-4 mb-8 justify-center w-full">

                    <section className="w-full flex flex-col items-center gap-1 px-4 py-2 rounded-xl bg-orange-100 border-2 border-orange-600">
                        <p className="text-md font-bold">Yash Yegare</p>
                        <section><a className="no-underline p-1 hover:bg-orange-300 rounded" href={"https://github.com/yashyegare"} target="_blank">Github</a> | <a className="no-underline p-1 hover:bg-orange-300 rounded" href={""} target="_blank">Website</a></section>
                    </section>
    
                </section>
            </Container>
            <div className="page-body">

                <div>
                    <div style={{position: 'relative', width: '100%', height: 0, paddingTop: '56.2500%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform'}}>
                        <iframe loading="lazy" style={{position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0}} src="https://www.canva.com/design/DAFsVnyeZfw/view" allowFullScreen={true} allow="fullscreen">
                        </iframe>
                    </div>
                    <a href="https://www.canva.com/design/DAFsVnyeZfw/HAKqZREsBBSWqrWKP_fMsQ/edit?utm_content=DAFsVnyeZfw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener">Predicting Formula 1 Race Results</a>
                </div>
                <p id="ac8a8b58-76b6-4573-a111-529e2e4d262a">
            </p><h3 id="7c7d4c6c-4f3f-45f6-ad3e-58df8fca8b85">Abstract:</h3><p id="61139936-184e-4c80-91a9-8ce328f0c9c7" >The project presents a comprehensive approach to predicting the performance of drivers in Formula One races. I combined machine learning models, such as logistic regression, decision tree, random forest, support vector machine, Gaussian Naive Bayes, and K-Nearest Neighbors, with data analysis techniques to analyze the impact of various factors on the likelihood of a driver achieving a podium finish or scoring points.</p><p id="2d80ca01-ddc2-4a52-98c2-a6cc7d2dcf43" >Also conducted extensive exploratory data analysis on race data results, analyzing data on drivers, constructors, circuits, and other variables to identify the most significant factors affecting driver performance. I also examined the impact of circuit location, the number of races held at a particular circuit, driver experience, nationality, and constructor performance on the likelihood of a driver achieving a podium finish or scoring points.</p><p id="ed1e3271-84ef-4781-9125-0f5816739211" >The approach utilizes both one-hot encoding to transform categorical and numerical data into a format that can be used by the machine learning models. I also got to introduce the concepts of Driver DNF index and Constructor DNF index to quantify the impact of driver and constructor errors on race results. I bring in my understanding through the models and their results to actually see what are the factors contributing to a win.</p><p id="462c1543-dd97-45e1-927f-dd460567637e" >Overall, the approach provides a comprehensive methodology for predicting driver performance in Formula One races, and the results demonstrate the effectiveness of the approach. The findings can be used by teams and analysts to make informed decisions regarding driver selection, strategy, and overall race performance. </p><h2 id="ea352a10-1899-484c-b0a8-998fcd72f4f7" >Keywords: </h2><p id="7051dd0e-deb3-4632-ad21-192ac641bb1c" >motorsport, Formula One, data analysis, machine learning, classification, driver performance, constructor performance, podium prediction, points prediction, DNF index, home team effect, circuit analysis, race history, driver nationality, neural networks, statistical modeling, predictive modeling, feature engineering, exploratory data analysis, data visualization, data preprocessing, data cleaning, data transformation, feature selection, model evaluation.</p><h2 id="617a02a8-1b83-40dc-b69c-d020dd1bd145" >Introduction:</h2><p id="cc38e75f-677d-4ab1-ab6b-800274e84297" ><strong>Background:
            </strong>Formula 1 is one of the most prestigious and challenging motorsports that attracts millions of
                fans worldwide. Predicting the winner of the next Grand Prix race is challenging and requires a
                comprehensive understanding of various factors. Several studies have been conducted to predict the race's winner, but most were based on subjective opinions and lacked data-driven approaches. I propose a machine learning approach to predict the following Formula 1 Grand
                Prix race winner. The approach considers various factors like weather conditions, driver and
                constructor standings, qualifying results, race results, and many more, both present and past.
                This is buried deep in many datasets requiring much analysis to merge. I will analyze the datasets and apply regression and classification techniques to predict the race winners. Will also evaluate the performance of the approach using various evaluation metrics and achieve promising results.</p><p id="67439476-974c-4145-92d7-89a227839432" >
            </p><p id="ef3a6218-592b-4da2-971e-585c96405bd6" ><strong>Objective(s):</strong>
                The primary objective is to propose a machine-learning approach to predict the winner of the following Formula 1 Grand Prix race. I aim to provide an accurate prediction that considers various present and past factors to help fans, team managers, and betters make informed decisions. I aim to do robust data analysis and find the factors contributing towards winners while also predicting the band of winners
            </p><p id="351ede97-a0b8-4ef4-86b6-22c7ef4bd3be" ><strong>Scope:</strong>
                The approach is based on machine learning and considers various present and past factors to
                predict the winner of the next Grand Prix race. I have used publicly available datasets and
                applied regression and classification techniques to predict the bands of winners. Based on the approach I will draw out inferences on major statistics and major winning factors. The approach can be applied to any Formula 1 race and can be helpful for fans, team managers, and betters in
                making informed decisions. 
            </p><p id="aec1f092-caa4-4ba1-a0e0-a31e2bcdd92a" ><strong>Impact:</strong>
                The proposed approach can have a significant impact on the Formula 1 industry. It can give fans
                accurate predictions of the race winners and enhance their viewing experience. Team managers
                can use the predictions to devise their race strategies and make informed decisions. Betters can
                use the predictions to place their bets on the race winner and increase their chances of winning.
                The proposed approach can also pave the way for further machine learning and motorsports
                research.</p><h2 id="c833339c-8f25-457f-8a4f-ab2c359674c3" >Materials and methodologies</h2><h3 id="997f6042-e2ea-42fa-a6e6-8fa2b334058f" >Dataset:</h3><p id="ade01b57-3a78-4197-9740-d6e7e25e5c57" >In order to gather all the necessary data required for the analysis, I primarily used quite a few sources as, the whole data wasn’t exactly available at one resource. The Ergast Data repository which contains all sorts of motorsports data, therefore had a very comprehensive historical data on Formula One. All in all for the analysis to make sense especially I needed six individual dataframes although I did combine them into one final dataframe: </p><ul id="20d0d2e9-aa3c-4321-8563-d600da3cabb1" className="bulleted-list"><li style={{listStyleType: 'disc'}}><strong>All Races Information</strong><p id="b14f8b47-678a-451c-8d16-5f0f6cb5044a" >First I obtained information about all the races starting from the first year of F1 thats is 1950 all the way upto 2022. This included the season, round, the location as well as the wikipedia link.</p></li></ul><ul id="72ca1515-9287-48dd-863c-c688ca8652c5" className="bulleted-list"><li style={{listStyleType: 'disc'}}><strong>All Results </strong><p id="3ec5c903-d43e-4001-83cc-81ca533b1b9a" >Here I iterated through each and every year, through every race of the season and got the information about all the drivers and their results especially their nationality, the constructor they drove for and some redundant information which would be of no use to use such as the finishing status..</p></li></ul><ul id="cd0fc535-81bb-4ef1-af62-274c5ca67547" className="bulleted-list"><li style={{listStyleType: 'disc'}}><strong>Driver Standings</strong><p id="0d1911b6-9475-42fb-a352-c4a75cd7f705" >Only the top 10 drivers would be awarded with points and the maximum being 25 points.</p></li></ul><ul id="c46be014-dd34-4225-8377-4f49107bec71" className="bulleted-list"><li style={{listStyleType: 'disc'}}><strong>Constructor Standings</strong><p id="bc591314-4a3c-481f-bd74-c702ec66c91a" >Again similarly like above I followed the same method and got the top three constructors after every race, as well as these points are accumulating every race so I kept that into account as well.</p></li></ul><ul id="ff945348-2a58-4fb0-a62d-fd6a9aa5cf64" className="bulleted-list"><li style={{listStyleType: 'disc'}}><strong>Qualifying Standings</strong><p id="d11e6959-e00c-453c-9edb-35c1c7dd8ffd" >Here the Ergast repository wasn’t that reliable as it had quite a lot of pores in the data, to achieve this I ended up using web-scrapping methods directly from the Formula 1 website.</p></li></ul><ul id="db1c5053-4945-4867-afae-4829beb930ce" className="bulleted-list"><li style={{listStyleType: 'disc'}}><strong>Weather Information</strong><p id="97512902-3668-4a23-b297-2771227988f1" >Again since Ergast didn’t cover the aspect of weather conditions which drastically effect the outcome of the race. I had to scrape the weather at the location of the race during the duration of the race. This was only possible when I scrapped weather from Wikipedia and when they weren’t available OpenWeatherMap.</p></li></ul><p id="3e30cc83-cd46-49fc-87cb-6cfd5bd543c2" >Here after exhaustively collecting data for the analysis, it was time to combine all the data into one single dataset making it easier to keep all the features I assumed were influencing the outcome of the race as well as scraping away all the redundant columns. </p><h3 id="b8a269eb-b146-4e6e-b447-b4d99ea1c8d1" >Exploratory Data Analysis:</h3><p id="cee5ce3f-4e07-4ba0-b9e1-30ceebba6831" >In the exploratory data analysis phase of the project, I delved deep into the data and conducted various analyses to understand the factors affecting driver and constructor performance in Formula One races, analyzed several aspects of the data, including circuit analysis, driver nationality, championship wins, and the number of races won by each driver and constructor.</p><p id="7ba06642-d03e-4179-b1cf-b31b996dcd31" >I identified key trends, such as the dominance of certain teams like Ferrari and Mercedes in terms of the number of races won and championships won. Also estimated the DNF ratio due to driver error and constructor error, which helped me to gain insights into the importance of reliability in Formula One races.</p><p id="218320ec-7729-4e77-944e-d5ed68213b1c" >Moreover, I investigated the effect of home races on drivers and constructors, which helped to understand how certain teams and drivers perform better when they are competing in their home country. The analysis of these factors allowed me to gain a more comprehensive understanding of the sport and inform the modeling approach to predict driver and constructor performance.</p><p id="c60d4b34-16c9-479f-ba94-3a0f48c02f7c" >Overall, the exploratory data analysis was a crucial part of the project, as it helped to uncover important insights about the sport that I could use to build more accurate predictive models. The findings will be valuable to those interested in understanding the factors that contribute to success in Formula One races.</p><figure id="6be66a6f-0849-4452-88f1-17f87834ff95" className="image"><a href="/Untitled.png"><img style={{width: '1737px'}} src="/Untitled.png" /></a></figure><p id="59f61678-ad6c-47c2-8a49-d6a156786fc8" >A plot describing the percentage of constructor achieving podium finish in their home races for the understanding</p><figure id="6c6621c8-f149-444a-b1d1-fb0ead776bee" className="image"><a href="/Untitled%201.png"><img style={{width: '1791px'}} src="/Untitled%201.png" /></a></figure><p id="88b6ceca-92cb-4015-8770-ef0e4bb931af" >A plot describing drivers getting points percentage in their home races</p><figure id="b6f42f29-54fc-4196-b0e4-460414de3d63" className="image"><a href="/Untitled%202.png"><img style={{width: '1822px'}} src="/Untitled%202.png" /></a></figure><p id="6ed80a25-43d0-42d4-8ff9-077024c95516" >A plot describing the percentage of DNFs due to a constructor error</p><p id="740f1b60-2a28-4839-b31c-f267deccb411" >Above are a few plots generated to see home ground advantage and DNFs due to constructor and clearly I have deduced that home ground has a lot of advantage.</p><h3 id="7c0ac572-d0da-4014-9140-d13b4a8ec8e0" >Methodology:</h3><p id="9256f6b6-a92a-45a5-a774-c579c1719d53" >For the project, I trained several classification models to predict the likelihood of a driver finishing in the podium or points positions, or having a DNF (Did Not Finish). The goal was to compare the performance of different models and select the best one for final predictions.</p><p id="1c58e2c0-a902-431b-9aa6-16eec683485a" >The models trained were Logistic Regression, Decision Tree, Random Forest, Support Vector Machine (SVM), Gaussian Naive Bayes, and K-Nearest Neighbors. I chose these models based on their popularity in the machine learning community and their ability to handle classification problems.</p><p id="6f581fd6-0414-47c3-9559-5744e6545ae2" >I also employed cross-validation as part of the methodology to evaluate the performance of thw models. Cross-validation is a technique used to assess how well a model can generalize to new data. It involves partitioning the dataset into training and validation sets, training the model on the training set, and then evaluating its performance on the validation set. This process is repeated several times, with different partitions of the data, to obtain a more reliable estimate of the model's performance. I used k-fold cross-validation, where the data is divided into k equally-sized subsets, and the model is trained and evaluated k times, each time using a different subset as the validation set. Cross-validation allowed to assess the performance of the models on different subsets of the data and to fine-tune the hyperparameters to avoid overfitting.</p><p id="b993b05f-f5e0-486f-a3e2-9fe8db12fe0e" >To train the models, I used a range of parameters that were selected after thorough research and experimentation. For example, for the Decision Tree model, I used the "entropy" criterion to measure the quality of a split and "max_depth" to limit the depth of the tree to avoid overfitting. For the Random Forest model, I used "n_estimators" to control the number of trees in the forest and "max_features" to limit the number of features considered for each split. I also used cross-validation to evaluate the performance of each model and fine-tune the parameters.</p><p id="1bc0a876-8dfe-419a-ad72-8571d5ccb5f1" >After training and evaluating the models, selected the Random Forest model as the final model, as it showed the highest accuracy. The Random Forest model also provided feature importance scores, which allowed to identify the most important features for predicting driver performance.</p><p id="205a5318-e868-411e-b1cb-a6618cac5d2e" >Overall, the methodology involved thorough research and experimentation to select and train the best models, and fine-tuning parameters to optimize their performance. I also used feature engineering as a part of  creating some intermediate columns based on the analysis of the data, such as "driver confidence," which was calculated as the percentage of races a driver had completed without a DNF. I also created columns to capture the home advantage of drivers and constructors, as well as their relative reliability compared to other drivers and constructors. I also used selection techniques to identify the most important features and improve the accuracy of the predictions.</p><h3 id="1e32ccba-2757-4f19-a895-52e45f36c1b3" >Novelty:</h3><p id="f8add1d3-1a0b-42fa-adc3-7e23994f1461" >This project is unique in that it applies data analysis and machine learning techniques to predict driver performance in Formula One races. While motorsports are often subject to human intuition and subjective opinions, the project takes a data-driven approach to predicting outcomes, using a variety of factors that contribute to driver and constructor success. We also introduced novel features, such as driver and constructor confidence, and home team effects and also DNF ratios and DNF index for drivers and constructors which allowed us to better capture the nuances of motorsport performance. Our project offers a new perspective on motorsports analytics and could have important applications in areas such as sports betting, team management, and driver development. Overall, our project represents a significant contribution to the field of motorsport analytics and showcases the potential of data-driven approaches in predicting and understanding motorsport performance.</p><h3 id="bcd05d23-3754-45a0-8261-a1ca037ad601" >Application:</h3><p id="163e2590-5665-471c-992f-37aba80a03ba" > By using data-driven models to predict the likelihood of a driver finishing in the podium or points positions, or having a DNF, our project could help bettors make more informed decisions and improve their chances of winning.</p><p id="12447963-740e-4b60-a8f5-2c7fd38f3e47" >Another application of our project is in team management, where our predictions could help teams make strategic decisions on factors such as driver selection, race strategy, and car development. By providing insights into the factors that contribute to driver and constructor success, our project could help teams optimize their performance and achieve better results.</p><p id="cc25cd9e-3edf-493e-82ca-777ba4bbf613" >In addition to the applications mentioned earlier, our project also has potential in the area of fantasy sports, specifically Formula One fantasy teams. Using our machine learning model to predict race outcomes, we can select the top-performing drivers and constructors within the constraints of a limited budget, maximizing the chances of scoring the most points in a fantasy league. This application of our model could be of interest to F1 enthusiasts who participate in fantasy leagues, providing a unique and data-driven approach to building a winning team.</p><p id="f71230fc-24a2-49b3-b940-a264fd1632ba" >Our project could also have applications in driver development, where our predictions could be used to identify talented drivers and provide insights into the factors that contribute to their success. By analyzing the performance of drivers across multiple seasons and circuits, our project could provide valuable insights into the skills and attributes that are most important for success in motorsports.</p><p id="39a2ee4c-b138-4fa5-839a-18430f7fd947" >Overall, our project offers a new perspective on motorsports analytics and could have important applications in areas such as sports betting, team management, and driver development. By using data-driven approaches to predict and understand motorsport performance, our project showcases the potential of data analytics in sports and beyond.</p><p id="57c01a9f-af47-4c6e-bc98-fca6c76bfad4" >
            </p><h3 id="0f56d7f3-97e1-47e4-ba4a-cc8de8b0981c" >Evaluation Metrics:</h3><p id="1c644e55-e951-4514-bc4f-8465ad844c92" >For evaluating the performance of the classification models, I used the accuracy metric, which measures the proportion of correctly classified instances over the total number of instances. I also used other metrics such as precision, recall, and F1 score, which take into account the trade-offs between true positive, false positive, true negative, and false negative rates. Additionally, used cross-validation techniques to evaluate the robustness of the models and prevent overfitting. Overall, the evaluation metrics allowed me to assess the accuracy and reliability of the models in predicting driver performance in Formula One races.</p><p id="33b1bd3d-8dac-4c56-92d4-b5ed77d92299" >
            </p><h2 id="3cb2b616-d1d5-47f6-bd5f-cd52dc99ef52" >Results and Discussions:</h2><p id="9b715ddb-666e-4158-95fe-93ab64414434" >Preliminarily when I just trained the final combined dataset, I present the results of the experiments and discuss their implications. Initially, I used four machine learning algorithms - logistic regression, neural network regressor, random forest classifier, and support vector classifier (SVC) - to predict Formula One race outcomes. The accuracy of these models ranged from 0.50 to 0.68.</p><p id="03faf4e6-de35-4d8e-a135-7e29580a1229" >As you can see from the below the results that is the accuracies they aren’t very appealing atleast as I expected them to. </p><figure id="0c36cb82-8a5d-47d3-8786-21c7d81e3c66" className="image"><a href="/Untitled%203.png"><img style={{width: '1424px'}} src="/Untitled%203.png" /></a></figure><p id="c1d52818-62c8-47bf-999f-253bdc47c3f0" >These above unappealing results were due to the assumptions I made. I had unnecessarily taken up a lot of variables which I thought would influence the race outcomes although yes they would be affecting the race outcomes, they were making an insignificant impact on the race outcomes. I then employed several feature engineering techniques, such as driver and constructor confidence, home team advantage, and DNF rate, to improve the accuracy of the models. Furthermore, I performed feature selection and hyperparameter tuning to further improve the performance of the models.</p><p id="8a2b9b65-eca8-4dd4-9814-135d2fea1dc1" >After these improvements, I observed a substantial increase in accuracy across all models. The SVC algorithm yielded the highest accuracy of 0.95, followed by the Random Forest Classifier at 0.94. The Logistic Regression model's accuracy was 0.93, followed closely by the K-Nearest Neighbors Classifier at 0.93. GaussianNB also achieved a reasonably good accuracy of 0.87.</p><p id="74d6b2ea-3069-45fb-9236-2e3e6bb5e911" >One interesting inference I got from feature engineering was that I had found a humoungous impact on race outcomes due to home advantage which indicated the familiarity of the track and the support of the home crowd can boost a team’s performance</p><p id="6ec2e2bf-98ad-4190-8c0b-d3ccf24e028c" >These results demonstrate the effectiveness of feature engineering, feature selection, and hyperparameter tuning techniques in improving the accuracy of machine learning models in predicting Formula One race outcomes. The high accuracy of the models also suggests that the approach could be valuable in applications such as sports betting and fantasy team selection.</p><p id="221a7814-5165-46d6-b513-244b6230d213" >
            </p><figure id="e005954b-cb01-41dc-bbce-addadf9fdff1" className="image"><a href="/Untitled%204.png"><img style={{width: '1454px'}} src="/Untitled%204.png" /></a></figure><p id="6caca7b3-ee0b-4371-96e0-b02357f13fd4" >Final scores on the best performing models from the above that is the SVC and the RandomforestClassifier.</p><figure id="0e8440f5-3dff-47bd-93cd-b4ded645fe84" className="image"><a href="/Untitled%205.png"><img style={{width: '788px'}} src="/Untitled%205.png" /></a></figure><p id="aea0b19a-ed57-4424-a1c0-5e976d62685c" >
            </p><p id="b4a45f59-08ee-40e2-b08c-3036d83e8946" >
            </p><h2 id="2b5eda01-cd9a-4e9f-8220-4fcca3758832" >Conclusion:</h2><p id="3f0d8246-9e7d-4370-a29d-69af409907e3" >In conclusion, the project successfully applied data analysis and machine learning techniques to predict driver performance in Formula One races. I used a variety of methods including exploratory data analysis, feature engineering, feature selection, and predictive modeling to identify key factors that contribute to driver and constructor success.</p><p id="2c24a0c0-6107-4fa2-8c48-8c9e68b6f6a3" >The models were able to accurately predict podium and points positions with a high degree of accuracy, taking into account variables such as DNF index, home team effect, circuit analysis, race history, and driver nationality. I also investigated the factors contributing based on the model predictions.</p><p id="8d4c15e7-0d49-469a-b780-545edf127945" >In addition to the achievements in accurately predicting podium and points positions, the model training has provided valuable insights into the factors that contribute to driver and constructor success in Formula One races. Through the analysis, I have identified key winning factors such as driver experience, circuit characteristics, and team performance.</p><p id="91062d59-38b5-4117-a0ec-db21dcbeab51" >Furthermore, I acknowledge that there is still scope for improvement in the approach, particularly in terms of predicting exact positions with higher accuracies and incorporating real-time race data for dynamic predictions. With advancements in technology and access to more comprehensive data, I believe that future research could further refine the models and increase their accuracy.</p><p id="f1bd1740-46c5-42e3-b7ce-fe6bfb7514d8" >Finally, I believe that our findings have broader implications beyond motorsport, as they could be applied to other sports and areas such as finance and marketing. Overall, this project has demonstrated the potential of data analysis and machine learning in providing actionable insights and making predictions, and I look forward to further exploring this exciting field in future research.</p>

            </div>
        </>
    )
}

export default Docs;