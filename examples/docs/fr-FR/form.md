## Form

Un formulaire est constitué des éléments `input`, `radio`, `select`, `checkbox`, etc. Il sert principalement à collecter, vérifier et soumettre des données.

### Formulaire de base

Il peut contenir toutes sortes de champs tels que `input`, `select`, `radio` et `checkbox`.

:::demo Dans chaque composant `form`, il vous faudra utiliser la balise `form-item` pour servir de conteneur à chaque champ.

```html
<sg-form ref="form" :model="form" label-width="120px">
  <sg-form-item label="Activity name">
    <sg-input v-model="form.name"></sg-input>
  </sg-form-item>
  <sg-form-item label="Activity zone">
    <sg-select v-model="form.region" placeholder="please select your zone">
      <sg-option label="Zone one" value="shanghai"></sg-option>
      <sg-option label="Zone two" value="beijing"></sg-option>
    </sg-select>
  </sg-form-item>
  <sg-form-item label="Activity time">
    <sg-col :span="11">
      <sg-date-picker type="date" placeholder="Choisissez une date" v-model="form.date1" style="width: 100%;"></sg-date-picker>
    </sg-col>
    <sg-col class="line" :span="2">-</sg-col>
    <sg-col :span="11">
      <sg-time-picker placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></sg-time-picker>
    </sg-col>
  </sg-form-item>
  <sg-form-item label="Instant delivery">
    <sg-switch v-model="form.delivery"></sg-switch>
  </sg-form-item>
  <sg-form-item label="Activity type">
    <sg-checkbox-group v-model="form.type">
      <sg-checkbox label="Online activities" name="type"></sg-checkbox>
      <sg-checkbox label="Promotion activities" name="type"></sg-checkbox>
      <sg-checkbox label="Offline activities" name="type"></sg-checkbox>
      <sg-checkbox label="Simple brand exposure" name="type"></sg-checkbox>
    </sg-checkbox-group>
  </sg-form-item>
  <sg-form-item label="Resources">
    <sg-radio-group v-model="form.resource">
      <sg-radio label="Sponsor"></sg-radio>
      <sg-radio label="Venue"></sg-radio>
    </sg-radio-group>
  </sg-form-item>
  <sg-form-item label="Activity form">
    <sg-input type="textarea" v-model="form.desc"></sg-input>
  </sg-form-item>
  <sg-form-item>
    <sg-button type="primary" @click="onSubmit">Créer</sg-button>
    <sg-button>Annuler</sg-button>
  </sg-form-item>
</sg-form>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```
:::

:::tip
[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) stipule que
> <i>Lorsqu'il n'y a qu'un seul champ de type texte dans un formulaire, le navigateur devrait accepter la pression de la touche Entrée sur ce champ comme méthode de soumission du formulaire</i>

Pour éviter ce comportement, vous pouvez ajouter `@submit.native.prevent` dans `<sg-form>`.
  :::

### Formulaire horizontal

Lorsque l'espace vertical est limité et que le formulaire est relativement simple, vous pouvez le placer sur une seule ligne.

:::demo Mettez l'attribut `inline` à `true` et le formulaire sera en une seul ligne.

```html
<sg-form :inline="true" :model="formInline" class="demo-form-inline">
  <sg-form-item label="Approved by">
    <sg-input v-model="formInline.user" placeholder="Approved by"></sg-input>
  </sg-form-item>
  <sg-form-item label="Activity zone">
    <sg-select v-model="formInline.region" placeholder="Activity zone">
      <sg-option label="Zone one" value="shanghai"></sg-option>
      <sg-option label="Zone two" value="beijing"></sg-option>
    </sg-select>
  </sg-form-item>
  <sg-form-item>
    <sg-button type="primary" @click="onSubmit">Query</sg-button>
  </sg-form-item>
</sg-form>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
```
:::

### Alignement

Suivant votre design, il y a différents moyens d'aligner vos labels.

:::demo L'attribut `label-position` permet de régler l'alignement, il peut être à `top` ou `left`. Quand il est à `top`, les labels sont placés au-dessus des champs.

```html
<sg-radio-group v-model="labelPosition" size="small">
  <sg-radio-button label="left">Left</sg-radio-button>
  <sg-radio-button label="right">Right</sg-radio-button>
  <sg-radio-button label="top">Top</sg-radio-button>
</sg-radio-group>
<div style="margin: 20px;"></div>
<sg-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
  <sg-form-item label="Name">
    <sg-input v-model="formLabelAlign.name"></sg-input>
  </sg-form-item>
  <sg-form-item label="Activity zone">
    <sg-input v-model="formLabelAlign.region"></sg-input>
  </sg-form-item>
  <sg-form-item label="Activity form">
    <sg-input v-model="formLabelAlign.type"></sg-input>
  </sg-form-item>
</sg-form>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }
</script>
```
:::

### Validation

Le composant Form vous permet d'effectuer des vérifications, afin de détecter et corriger les erreurs facilement.

:::demo Ajoutez l'attribut `rules` au composant `Form`, passez les règles de validation, et configurez l'attribut `prop` de `Form-Item` pour ajouter la clé de la règle correspondante au champ. Plus d'informations ici:  [async-validator](https://github.com/yiminghe/async-validator).

```html
<sg-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <sg-form-item label="Activity name" prop="name">
    <sg-input v-model="ruleForm.name"></sg-input>
  </sg-form-item>
  <sg-form-item label="Activity zone" prop="region">
    <sg-select v-model="ruleForm.region" placeholder="Activity zone">
      <sg-option label="Zone one" value="shanghai"></sg-option>
      <sg-option label="Zone two" value="beijing"></sg-option>
    </sg-select>
  </sg-form-item>
  <sg-form-item label="Activity time" required>
    <sg-col :span="11">
      <sg-form-item prop="date1">
        <sg-date-picker type="date" placeholder="Choisissez une date" v-model="ruleForm.date1" style="width: 100%;"></sg-date-picker>
      </sg-form-item>
    </sg-col>
    <sg-col class="line" :span="2">-</sg-col>
    <sg-col :span="11">
      <sg-form-item prop="date2">
        <sg-time-picker placeholder="Pick a time" v-model="ruleForm.date2" style="width: 100%;"></sg-time-picker>
      </sg-form-item>
    </sg-col>
  </sg-form-item>
  <sg-form-item label="Instant delivery" prop="delivery">
    <sg-switch v-model="ruleForm.delivery"></sg-switch>
  </sg-form-item>
  <sg-form-item label="Activity type" prop="type">
    <sg-checkbox-group v-model="ruleForm.type">
      <sg-checkbox label="Online activities" name="type"></sg-checkbox>
      <sg-checkbox label="Promotion activities" name="type"></sg-checkbox>
      <sg-checkbox label="Offline activities" name="type"></sg-checkbox>
      <sg-checkbox label="Simple brand exposure" name="type"></sg-checkbox>
    </sg-checkbox-group>
  </sg-form-item>
  <sg-form-item label="Resources" prop="resource">
    <sg-radio-group v-model="ruleForm.resource">
      <sg-radio label="Sponsorship"></sg-radio>
      <sg-radio label="Venue"></sg-radio>
    </sg-radio-group>
  </sg-form-item>
  <sg-form-item label="Activity form" prop="desc">
    <sg-input type="textarea" v-model="ruleForm.desc"></sg-input>
  </sg-form-item>
  <sg-form-item>
    <sg-button type="primary" @click="submitForm('ruleForm')">Créer</sg-button>
    <sg-button @click="resetForm('ruleForm')">Réinitialiser</sg-button>
  </sg-form-item>
</sg-form>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Please select Activity zone', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Please select activity resource', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```
:::

### Validations personnalisées

Cet exemple montre comment vous pouvez personnaliser vos règles de validation pour effectuer une identification à deux facteurs.

:::demo Ici, nous utilisons `status-icon` pour afficher le résultat de la validation sous forme d'icône.
```html
<sg-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <sg-form-item label="Password" prop="pass">
    <sg-input type="password" v-model="ruleForm.pass" autocomplete="off"></sg-input>
  </sg-form-item>
  <sg-form-item label="Confirm" prop="checkPass">
    <sg-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></sg-input>
  </sg-form-item>
  <sg-form-item label="Age" prop="age">
    <sg-input v-model.number="ruleForm.age"></sg-input>
  </sg-form-item>
  <sg-form-item>
    <sg-button type="primary" @click="submitForm('ruleForm')">Submit</sg-button>
    <sg-button @click="resetForm('ruleForm')">Réinitialiser</sg-button>
  </sg-form-item>
</sg-form>
<script>
  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('Veuillez entrer l\'âge'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('Veuillez entrer des chiffres'));
          } else {
            if (value < 18) {
              callback(new Error('L\'âge doit être supérieur à 18 ans'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Veuillez entrer le mot de passe'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Veuillez entrer à nouveau le mot de passe'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Les deux entrées ne correspondent pas!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```
:::

:::tip
Les callback de validations personnalisées doivent être appelées. Un usage plus avancé se trouve ici: [async-validator](https://github.com/yiminghe/async-validator).
:::

### Ajouter ou supprimer des champs dynamiquement

:::demo En plus de pouvoir passer toutes les règles de validation en une seule fois au formulaire, vous pouvez aussi ajouter ou supprimer des règles sur un seul champ de manière dynamique.
```html
<sg-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="120px" class="demo-dynamic">
  <sg-form-item
    prop="email"
    label="Email"
    :rules="[
      { required: true, message: 'Veuillez entrer l\'adresse e-mail', trigger: 'blur' },
      { type: 'email', message: 'Veuillez entrer une adresse e-mail valide', trigger: ['blur', 'change'] }
    ]"
  >
    <sg-input v-model="dynamicValidateForm.email"></sg-input>
  </sg-form-item>
  <sg-form-item
    v-for="(domain, index) in dynamicValidateForm.domains"
    :label="'Domain' + index"
    :key="domain.key"
    :prop="'domains.' + index + '.value'"
    :rules="{
      required: true, message: 'domain ne peut pas être null', trigger: 'blur'
    }"
  >
    <sg-input v-model="domain.value"></sg-input><sg-button @click.prevent="removeDomain(domain)">Supprimer</sg-button>
  </sg-form-item>
  <sg-form-item>
    <sg-button type="primary" @click="submitForm('dynamicValidateForm')">Soumettre</sg-button>
    <sg-button @click="addDomain">Nouveau domaine</sg-button>
    <sg-button @click="resetForm('dynamicValidateForm')">Réinitialiser</sg-button>
  </sg-form-item>
</sg-form>
<script>
  export default {
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            key: 1,
            value: ''
          }],
          email: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item);
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1);
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          key: Date.now(),
          value: ''
        });
      }
    }
  }
</script>
```
:::

### Validation des nombres

:::demo Pour valider les nombres correctement, il vous faudra ajouter le modificateur `.number` à l'attribut `v-model`. Il est utilisé par Vuejs pour transformer les valeurs en nombres .
```html
<sg-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <sg-form-item
    label="age"
    prop="age"
    :rules="[
      { required: true, message: 'l\'âge est requis'},
      { type: 'number', message: 'l\'âge doit être un nombre'}
    ]"
  >
    <sg-input v-model.number="numberValidateForm.age" autocomplete="off"></sg-input>
  </sg-form-item>
  <sg-form-item>
    <sg-button type="primary" @click="submitForm('numberValidateForm')">Soumettre</sg-button>
    <sg-button @click="resetForm('numberValidateForm')">Réinitialiser</sg-button>
  </sg-form-item>
</sg-form>
<script>
  export default {
    data() {
      return {
        numberValidateForm: {
          age: ''
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
```
:::

:::tip
Lorsqu'un `sg-form-item` est imbriqué dans un autre `sg-form-item`, la largeur de son label sera `0`. Utilisez `label-width` sur ce `sg-form-item` si besoin.
:::

### Taille

Tout les composants d'un formulaire héritent leur attribut `size` de ce formulaire. Il est aussi possible de l'utiliser individuellement sur chaque FormItem.

:::demo Vous pouvez régler le `size` de chaque item si vous ne souhaitez pas qu'il hérite de son parent.
```html
<sg-form ref="form" :model="sizeForm" label-width="120px" size="mini">
  <sg-form-item label="Activity name">
    <sg-input v-model="sizeForm.name"></sg-input>
  </sg-form-item>
  <sg-form-item label="Activity zone">
    <sg-select v-model="sizeForm.region" placeholder="veuillez sélectionner votre zone">
      <sg-option label="Zone one" value="shanghai"></sg-option>
      <sg-option label="Zone two" value="beijing"></sg-option>
    </sg-select>
  </sg-form-item>
  <sg-form-item label="Activity time">
    <sg-col :span="11">
      <sg-date-picker type="date" placeholder="Choisissez une date" v-model="sizeForm.date1" style="width: 100%;"></sg-date-picker>
    </sg-col>
    <sg-col class="line" :span="2">-</sg-col>
    <sg-col :span="11">
      <sg-time-picker placeholder="Choisissez une heure" v-model="sizeForm.date2" style="width: 100%;"></sg-time-picker>
    </sg-col>
  </sg-form-item>
  <sg-form-item label="Activity type">
    <sg-checkbox-group v-model="sizeForm.type">
      <sg-checkbox-button label="Online activities" name="type"></sg-checkbox-button>
      <sg-checkbox-button label="Promotion activities" name="type"></sg-checkbox-button>
    </sg-checkbox-group>
  </sg-form-item>
  <sg-form-item label="Resources">
    <sg-radio-group v-model="sizeForm.resource" size="medium">
      <sg-radio border label="Sponsor"></sg-radio>
      <sg-radio border label="Venue"></sg-radio>
    </sg-radio-group>
  </sg-form-item>
  <sg-form-item size="large">
    <sg-button type="primary" @click="onSubmit">Créer</sg-button>
    <sg-button>Annuler</sg-button>
  </sg-form-item>
</sg-form>

<script>
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  };
</script>
```
:::

### Attributs de Form

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
| ---- | ----| ---- | ---- | ---- |
| model| Données du formulaire. | object | — | — |
| rules | Règles de validation du formulaire. | object | — | — |
| inline | Si le formulaire est horizontal. | boolean | — | false |
| label-position | Position des labels. Si 'left' ou 'right', `label-width` est aussi requis. | string | left / right / top | right |
| label-width | Largeur des labels, tout les enfants directs hériteront de cette valeur. La largeur `auto` est supportée. | string | — | — |
| label-suffix | Suffixe de labels. | string | — | — |
| hide-required-asterisk | Si les champs obligatoires doivent avoir une astérisque rouge (étoile) à coté de leurs labels. | boolean | — | false |
| show-message  | Si le message d'erreur doit apparaître. | boolean | — | true |
| inline-message  | Si le message d'erreur doit apparaître en ligne avec son champ. | boolean | — | false |
| status-icon  | Si une icône indiquant le résultat de validation doit apparaître. | boolean | — | false |
| validate-on-rule-change  | Si la validation doit se déclencher lorsque `rules` est modifié. | boolean | — | true |
| size  | Contrôle la taille des champs du formulaire. | string | medium / small / mini | — |
| disabled | Si tout les champs du formulaire doivent être désactivés. Si `true`, il ne peut pas être modifié par l'attribut `disabled` des enfants. | boolean | — | false |

### Méthodes de Form

| Méthode | Description | Paramètres |
| ---- | ---- | ---- |
| validate | Valide le formulaire. Prends une callback en paramètre. Après la validation, la callback est exécutée avec deux paramètres: un boolean indiquant si la validation est bonne, et un objet contenant tout les champs qui ont échoués. Retourne une promesse si aucune callback n'est passée. | Function(callback: Function(boolean, object)) |
| validateField | Valide un ou plusieurs champs du formulaire. | Function(props: string \| array, callback: Function(errorMessage: string)) |
| resetFields | Efface tout les champs et les résultats de validation. | — |
| clearValidate | Efface les messages de validation de certains champs. Le paramètre est le nom du champ ou une liste des champs concernés. S'il est omis, tout les champs seront concernés. | Function(props: string \| array) |

### Évènnements de Form

| Nom | Description | Paramètres |
|----------- |------------ |----------- |
| validate   | Se déclenche après la validation d'un champ. | Nom du champs qui a été validé, si la validation est bonne et le message d'erreur sinon. |

### Attributs de FormItem

| Attribut      | Description          | Type      | Valeurs acceptées       | Défaut  |
| ---- | ----| ---- | ---- | ---- |
| prop | Une des clés de `model`. Utilisés par les méthodes validate et resetFields. Requis. | string | Clés du model passé à `form`. |
| label | Le label. | string | — | — |
| label-width | Largeur du label, e.g. '50px'. La largeur `auto` est supportée. | string | — | — |
| required | Si le champ est requis ou non. Si omis, sera déterminé par les règles de validation. | boolean |  — | false |
| rules | Règles de validation du formulaire. | object | — | — |
| error | Message d'erreur du champ. S'il est modifié, le champ l'affichera immédiatement. | string | — | — |
| show-message  | Si le message d'erreur doit apparaître. | boolean | — | true |
| inline-message  | Si le message d'erreur doit être en ligne avec le champ. | boolean | — | false |
| size  | Contrôle la taille du FormItem. | string | medium / small / mini | - |

### Slot de Form-Item
| Nom | Description |
|------|--------|
| — | Contenu de Form Item. |
| label | Contenu du label. |

### Slot avec portée de Form-Item
|      Nom     | Description |
|---------------|-------------|
|      error    | Contenu personnalisé pour les messages de validation. Le paramètre du scope est { error }. |

### Méthodes de Form-Item

| Méthode | Description | Paramètres |
| ---- | ---- | ---- |
| resetField | Efface le champ et les résultats de validation. | — |
| clearValidate | Efface le status de validation du champ. | - |
