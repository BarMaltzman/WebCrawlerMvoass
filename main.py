import sys,os
import time
from pprint import pprint
sys.path.append(os.getcwd())
from selenium import webdriver

driver = webdriver.Chrome(executable_path=os.path.abspath("chromedriver"))

def get_city_data(city_name):

    base_url = "https://openweathermap.org/find?q=" + city_name.lower()
    driver.get(base_url)
    time.sleep(1)

    next_page = driver.find_element_by_xpath('// *[ @ id = "forecast_list_ul"] / table / tbody / tr[1] / td[2] / b[1] / a')
    next_page.click()
    time.sleep(0.7)

    element = driver.find_element_by_xpath('//*[@id="weather-widget"]/h3')
    tempreture = element.text.strip()
    tempreture = tempreture.replace("°C","")

    element = driver.find_element_by_xpath('//*[@id="weather-widget"]/h3/img')
    icon_url = element.get_attribute("src")

    element = driver.find_element_by_xpath('//*[@id="weather-widget-wind"]')
    wind = element.text.strip()


    element = driver.find_element_by_xpath('// *[ @ id = "weather-widget"] / table / tbody / tr[4] / td[2]')
    humidity = element.text.strip()
    humidity = humidity.replace("%","")
    pure_json = {}
    pure_json["city_name"] = city_name
    pure_json["tempreture"] = tempreture
    pure_json["icon_url"] = icon_url
    pure_json["wind"] = wind
    pure_json["humidity"] = humidity



    driver.close()
    return pure_json








if __name__ == "__main__":

    try:
        city_name = sys.argv[1]
    except:
        print("ERROR")
    json = get_city_data(city_name)
    print(json)







